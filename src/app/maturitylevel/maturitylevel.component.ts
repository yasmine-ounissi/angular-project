import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maturitylevel',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './maturitylevel.component.html',
  styleUrl: './maturitylevel.component.css'
})
export class MaturitylevelComponent {
  constructor(private router: Router) {}
  onNext(): void {
    // Navigate to the 'impritips' route
    this.router.navigate(['/impritips']);
  }
}
