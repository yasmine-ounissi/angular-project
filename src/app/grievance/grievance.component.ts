import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grievance',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './grievance.component.html',
  styleUrls: ['./grievance.component.css']
})
export class GrievanceComponent implements OnInit {
  grievanceForm: FormGroup;
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.grievanceForm = this.fb.group({
      q1: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q2: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q3: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.grievanceForm.valid) {
      const formValues = this.grievanceForm.value;
      localStorage.setItem('GrievanceScores', JSON.stringify(Object.values(this.grievanceForm.value)));

      // Calculate total score and average score
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
      // Trigger validation messages
      this.grievanceForm.markAllAsTouched();
    }
  }

  onNext(): void {
    if (this.grievanceForm.valid) {
      this.router.navigate(['/reporting']);
    } else {
      this.grievanceForm.markAllAsTouched();
    }
  }
}
