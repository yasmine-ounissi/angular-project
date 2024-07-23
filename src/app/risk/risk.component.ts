import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-risk',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  riskForm: FormGroup;
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;
  showButtons: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.riskForm = this.fb.group({
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
    const scoreInputs = Array.from(document.querySelectorAll('input')) as HTMLInputElement[];
    const allFieldsFilled = scoreInputs.every(input => input.value.trim() !== '');
    
    this.showButtons = !allFieldsFilled;
  }

  onInput(): void {
    this.validateForm();
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    const scoreInputs = Array.from(document.querySelectorAll('input')) as HTMLInputElement[];
    const allFieldsFilled = scoreInputs.every(input => input.value.trim() !== '');

    if (allFieldsFilled) {
      let total = 0;
      let numberOfScores = 0;

      scoreInputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
          total += value;
          numberOfScores++;
        }
      });

      this.averageScore = (numberOfScores > 0) ? parseFloat((total / numberOfScores).toFixed(2)) : 0;
      this.totalScore = total;
      this.showScore = true;
      this.showButtons = false;
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  }

  onNext(): void {
    const scoreInputs = Array.from(document.querySelectorAll('input')) as HTMLInputElement[];
    const allFieldsFilled = scoreInputs.every(input => input.value.trim() !== '');

    if (allFieldsFilled) {
      // Navigate to the 'risk' page
      this.router.navigate(['/management']);
    } else {
      alert('Please fill in all fields before proceeding to the next page.');
    }
  }
}
