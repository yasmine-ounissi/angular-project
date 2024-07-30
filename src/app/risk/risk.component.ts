import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-risk',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  riskForm: FormGroup;
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.riskForm = this.fb.group({
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
      q14: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q15: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q16: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q17: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q18: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q19: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q20: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q21: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q22: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q23: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q24: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q25: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q26: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q27: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q28: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q29: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q30: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q31: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q32: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q33: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q34: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q35: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q36: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q37: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q38: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q39: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q40: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q41: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q42: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q43: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q44: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q45: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q46: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q47: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q48: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q49: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q50: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q51: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q52: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q53: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q54: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q55: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q56: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q57: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q58: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q59: [null, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Form submitted');
    console.log('Form valid:', this.riskForm.valid);
  
    if (this.riskForm.valid) {
      const formValues = this.riskForm.value;
      localStorage.setItem('RiskScores', JSON.stringify(Object.values(this.riskForm.value)));
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
      this.riskForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
  
  onNext(): void {
    if (this.riskForm.valid) {
      this.router.navigate(['/management']);
    } else {
      alert('Please fill in all fields before proceeding to the next page.');
    }
  }
}
