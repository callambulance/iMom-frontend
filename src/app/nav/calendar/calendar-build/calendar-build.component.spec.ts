import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBuildComponent } from './calendar-build.component';

describe('CalendarBuildComponent', () => {
  let component: CalendarBuildComponent;
  let fixture: ComponentFixture<CalendarBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
