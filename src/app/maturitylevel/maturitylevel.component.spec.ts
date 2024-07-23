import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturitylevelComponent } from './maturitylevel.component';

describe('MaturitylevelComponent', () => {
  let component: MaturitylevelComponent;
  let fixture: ComponentFixture<MaturitylevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaturitylevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaturitylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
