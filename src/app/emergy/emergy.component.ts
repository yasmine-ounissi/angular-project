import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emergy',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emergy.component.html',
  styleUrl: './emergy.component.css'
})
export class EmergyComponent {
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;

  onSubmit(event: Event): void {
    event.preventDefault();

    const numberInputs = Array.from(document.querySelectorAll('input[type="number"]')) as HTMLInputElement[];
    let total = 0;
    let answeredQuestions = 0;

    numberInputs.forEach(input => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
        total += value;
        answeredQuestions++;
      }
    });

    this.averageScore = (answeredQuestions > 0) ? total / answeredQuestions : 0;
    this.totalScore = total;
    this.showScore = true;
  }

}
