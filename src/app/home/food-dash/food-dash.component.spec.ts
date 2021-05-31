import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDashComponent } from './food-dash.component';

describe('FoodDashComponent', () => {
  let component: FoodDashComponent;
  let fixture: ComponentFixture<FoodDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
