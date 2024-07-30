import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-implementlevel',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './implementlevel.component.html',
  styleUrl: './implementlevel.component.css'
})
export class ImplementlevelComponent {
  constructor(private router: Router) {}

  onNext(): void {
    this.router.navigate(['/plan']);
  }

}
