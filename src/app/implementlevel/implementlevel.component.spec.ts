import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementlevelComponent } from './implementlevel.component';

describe('ImplementlevelComponent', () => {
  let component: ImplementlevelComponent;
  let fixture: ComponentFixture<ImplementlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementlevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
