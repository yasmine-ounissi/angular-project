import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  totalScore = 0;
  averageScore = 0;
  showScore = false;

  onSubmit(event: Event): void {
    event.preventDefault();

    const numberInputs = Array.from(document.querySelectorAll('input[type="number"]')) as HTMLInputElement[];
    let total = 0;
    let answeredQuestions = 0;

    numberInputs.forEach((input) => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
        total += value;
        answeredQuestions++;
      }
    });

    this.averageScore = answeredQuestions > 0 ? total / answeredQuestions : 0;
    this.totalScore = total;
    this.showScore = true;
  }
}
