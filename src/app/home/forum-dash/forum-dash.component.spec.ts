import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDashComponent } from './forum-dash.component';

describe('ForumDashComponent', () => {
  let component: ForumDashComponent;
  let fixture: ComponentFixture<ForumDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
