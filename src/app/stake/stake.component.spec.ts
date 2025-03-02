import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeComponent } from './stake.component';

describe('StakeComponent', () => {
  let component: StakeComponent;
  let fixture: ComponentFixture<StakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
