import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersDashComponent } from './counters-dash.component';

describe('CountersDashComponent', () => {
  let component: CountersDashComponent;
  let fixture: ComponentFixture<CountersDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountersDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
