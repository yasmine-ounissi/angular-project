import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.css'
})
export class ReportingComponent implements OnInit {
  totalScore: number = 0;
  averageScore: number = 0;
  showScore: boolean = false;
  showButtons: boolean = true;

  ngOnInit(): void {
    // Add initialization logic if needed
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
    this.showButtons = false;
  }
}