import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergy',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './emergy.component.html',
  styleUrls: ['./emergy.component.css'] 
})
export class EmergyComponent {
  emergencyForm: FormGroup;
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;
  showButtons: boolean = true;

  constructor(private router: Router, private fb: FormBuilder) {
    this.emergencyForm = this.fb.group({
      q1: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q2: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q3: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      q4: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.emergencyForm.valid) {
      const formValues = this.emergencyForm.value;
      localStorage.setItem('emergencyScores', JSON.stringify(Object.values(this.emergencyForm.value)));

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

      this.emergencyForm.markAllAsTouched();
    }
  }



  onNext(): void {
    const numberInputs = Array.from(document.querySelectorAll('input[type="number"]')) as HTMLInputElement[];
    const allFieldsFilled = numberInputs.every(input => input.value.trim() !== '');

    if (allFieldsFilled) {
      this.router.navigate(['/stake']); 
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  }
}
