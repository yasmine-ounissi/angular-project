import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './monot.component.html',
  styleUrl: './monot.component.css'
})
export class MonotComponent {
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

    if (answeredQuestions > 0) {
      this.averageScore = total / answeredQuestions;
    } else {
      this.averageScore = 0;
    }

    this.totalScore = total;
    this.showScore = true;
  }

}
