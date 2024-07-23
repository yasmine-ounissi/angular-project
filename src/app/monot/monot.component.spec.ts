import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonotComponent } from './monot.component';

describe('MonotComponent', () => {
  let component: MonotComponent;
  let fixture: ComponentFixture<MonotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
