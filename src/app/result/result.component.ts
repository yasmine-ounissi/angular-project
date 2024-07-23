import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  highestScores: number[] = [];
  selfAssessmentScores: number[] = [];

  ngOnInit(): void {
    this.initializeChart();
    this.loadScores();
  }

  private initializeChart(): void {
    Chart.register(...registerables); 

    const labels = [
      'Policy',
      'Identification of Risks and Impacts',
      'Management Programs',
      'Organizational Capacity and Competency',
      'Emergency Preparedness and Response',
      'Stakeholder Engagement',
      'External Communication and Grievance Mechanisms',
      'Ongoing Reporting to Affected Communities',
      'Monitoring and review'
    ];

    const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Highest Score',
              data: this.highestScores,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            },
            {
              label: 'Self Assessment Score',
              data: this.selfAssessmentScores,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 5
            }
          }
        }
      });
    }
  }

  private loadScores(): void {
    this.highestScores = JSON.parse(localStorage.getItem('highestScores') || '[]') || [];
    this.selfAssessmentScores = JSON.parse(localStorage.getItem('selfAssessmentScores') || '[]') || [];


    this.updateTable();
  }

  private updateTable(): void {
    const elements = {
      highestScores: Array.from({ length: 9 }, (_, i) => document.getElementById(`highestScore${i + 1}`)),
      selfAssessmentScores: Array.from({ length: 9 }, (_, i) => document.getElementById(`selfAssessmentScore${i + 1}`))
    };

    elements.highestScores.forEach((el, i) => {
      if (el) el.textContent = this.highestScores[i] !== undefined ? this.highestScores[i].toString() : '';
    });

    elements.selfAssessmentScores.forEach((el, i) => {
      if (el) el.textContent = this.selfAssessmentScores[i] !== undefined ? this.selfAssessmentScores[i].toString() : '';
    });
  }
}
