import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  reportingForm: FormGroup;
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;
  showButtons: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.reportingForm = this.fb.group({
      q1: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q2: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q3: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q4: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q5: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q6: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q7: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q8: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q9: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q10: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q11: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q12: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q13: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q14: [null, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Submit button clicked');
    console.log('Form valid:', this.reportingForm.valid);
  
    if (this.reportingForm.valid) {
      const formValues = this.reportingForm.value;
      localStorage.setItem('reportingScores', JSON.stringify(Object.values(this.reportingForm.value)));
      let totalScore = 0;
      let numberOfScores = 0;
      
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          const value = parseFloat(formValues[key]);
          if (!isNaN(value)) {
            totalScore += value;
            numberOfScores++;
          }
        }
      }
  
      this.averageScore = numberOfScores > 0 ? totalScore / numberOfScores : 0;
      this.totalScore = totalScore;
      this.showScore = true;
    } else {
      this.reportingForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
  
  onNext(): void {
    if (this.reportingForm.valid) {
      this.router.navigate(['/monot']); 
    } else {
      alert('Please fill in all fields before proceeding to the next page.');
    }
  }
}
