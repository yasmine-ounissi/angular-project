import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grievance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grievance.component.html',
  styleUrl: './grievance.component.css'
})
export class GrievanceComponent implements OnInit {
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;

  ngOnInit(): void {
    // Initialization logic if needed
  }

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