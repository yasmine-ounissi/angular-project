import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  highestScores: number[] = [];
  selfAssessmentScores: number[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadScores();
    this.initializeChart();
  }

  private loadScores(): void {
    const scoresKeys = [
      'policyScores',
      'RiskScores',
      'ManagementScores',
      'OrganisationScore',
      'emergencyScores',
      'stakeScores',
      'reportingScores',
      'GrievanceScores',
      'MonitoringScores'
    ];
  
    const categories = scoresKeys.map(key => {
      const data = JSON.parse(localStorage.getItem(key) || '{}');
      if (typeof data === 'object' && !Array.isArray(data)) {
        // Convert object values to an array of numbers
        const scores = Object.values(data).map((value: any) => Number(value));
        console.log(`Converted scores for ${key}:`, scores); // Debugging line
        return scores;
      } else if (Array.isArray(data)) {
        console.log(`Retrieved scores for ${key}:`, data); // Debugging line
        return data;
      } else {
        console.error(`Data for ${key} is neither an array nor an object:`, data);
        return [];
      }
    });
  
    // Debugging: Check the contents of categories
    console.log('Categories:', categories);
  
    // Find the maximum score for each category
    this.highestScores = categories.map(scores => Math.max(...scores, 0));
    console.log('Highest Scores:', this.highestScores); // Debugging line
  
    // Find the average score for each category
    this.selfAssessmentScores = categories.map(scores => this.calculateAverage(scores));
    console.log('Self Assessment Scores:', this.selfAssessmentScores); // Debugging line
  
    this.updateTable();
  }
  
  private calculateAverage(scores: number[]): number {
    if (scores.length === 0) return 0;
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  private updateTable(): void {
    const highestScoreElements = Array.from({ length: this.highestScores.length }, (_, i) => document.getElementById(`highestScore${i + 1}`));
    const selfAssessmentScoreElements = Array.from({ length: this.selfAssessmentScores.length }, (_, i) => document.getElementById(`selfAssessmentScore${i + 1}`));

    highestScoreElements.forEach((el, i) => {
      if (el) el.textContent = this.highestScores[i] !== undefined ? this.highestScores[i].toString() : '';
    });

    selfAssessmentScoreElements.forEach((el, i) => {
      if (el) el.textContent = this.selfAssessmentScores[i] !== undefined ? this.selfAssessmentScores[i].toString() : '';
    });
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
      'Monitoring and Review'
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

  onNext(): void {
    this.router.navigate(['/maturitylevel']);
  }
}
