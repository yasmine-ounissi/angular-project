import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  policyForm: FormGroup;
  totalScore: number = 0;
  averageScore: number = 0;  // Initialize to 0
  showScore: boolean = false;
  showButtons: boolean = true;

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

  validateForm(): void {
    const allFieldsFilled = Object.values(this.policyForm.controls).every(control => control.value !== null && control.value !== '');
    this.showButtons = !allFieldsFilled;
  }

  onInput(): void {
    this.validateForm();
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.policyForm.valid) {
      const values = this.policyForm.value;
      const scores = Object.values(values).filter(value => value !== null) as number[];

      this.totalScore = scores.reduce((sum, score) => sum + score, 0);
      this.averageScore = scores.length > 0 ? this.totalScore / scores.length : 0;

      this.showScore = true;
      this.showButtons = false;

      // Display score
      const scoreDisplay = document.getElementById('scoreDisplay');
      if (scoreDisplay) {
        scoreDisplay.style.display = 'block';
        document.getElementById('scoreValue')!.innerText = `Average Score: ${this.averageScore.toFixed(2)}`;
      }
    } else {
      alert('Please fill in all fields with values between 0 and 5 before proceeding.');
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
