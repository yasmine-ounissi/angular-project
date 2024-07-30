import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {
  planform!:FormGroup;

}
