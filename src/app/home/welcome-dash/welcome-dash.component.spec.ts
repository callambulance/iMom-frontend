import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDashComponent } from './welcome-dash.component';

describe('WelcomeDashComponent', () => {
  let component: WelcomeDashComponent;
  let fixture: ComponentFixture<WelcomeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
