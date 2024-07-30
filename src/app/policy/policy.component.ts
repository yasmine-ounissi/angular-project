import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  policyForm: FormGroup;
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.policyForm = this.fb.group({
      q1: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q2: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q3: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q4: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q5: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q6: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q7: [null, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log("Submit button clicked");
    console.log("Form Validity: ", this.policyForm.valid);
    console.log("Form Values: ", this.policyForm.value);

    if (this.policyForm.valid) {
      const formValues = this.policyForm.value;
      localStorage.setItem('policyScores', JSON.stringify(Object.values(this.policyForm.value)));
      
      let totalScore = 0;
      let numberOfScores = 0;
      

      Object.keys(formValues).forEach(key => {
        const value = parseFloat(formValues[key]); // Parse string to float
        if (!isNaN(value)) {
          totalScore += value;
          numberOfScores++;
        }
      });

      // Calculate average score
      this.averageScore = numberOfScores > 0 ? totalScore / numberOfScores : 0;
      this.totalScore = totalScore;
      this.showScore = true; // Show the calculated scores
      console.log("Average Score: ", this.averageScore);
      console.log("Total Score: ", this.totalScore);

      // Save the scores to localStorage
      localStorage.setItem('policyScores', JSON.stringify(formValues));
      localStorage.setItem('policyTotalScore', this.totalScore.toString());
      localStorage.setItem('policyAverageScore', this.averageScore.toString());
    } else {
      console.log("Form is invalid");
      // Mark all fields as touched to trigger validation messages
      this.policyForm.markAllAsTouched();
    }
  }

  onNext(): void {
    if (this.policyForm.valid) {
      // Navigate to the next page
      this.router.navigate(['/risk']);
    } else {
      alert('Please fill in all fields before proceeding to the next page.');
    }
  }
}
