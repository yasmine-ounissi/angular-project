import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  managform: FormGroup;
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;
  showButtons: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.managform = this.fb.group({
      q1: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q2: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q3: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q4: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q5: [null, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.managform.valid) {
      const formValues = this.managform.value;
      localStorage.setItem('ManagementScores', JSON.stringify(Object.values(this.managform.value)));

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
      this.managform.markAllAsTouched();
    }
  }

  onNext(): void {
    if (this.managform.valid) {
      this.router.navigate(['/orga']);
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  }
}
