import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergyComponent } from './emergy.component';

describe('EmergyComponent', () => {
  let component: EmergyComponent;
  let fixture: ComponentFixture<EmergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
