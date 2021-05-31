import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopicsComponent } from './user-topics.component';

describe('UserTopicsComponent', () => {
  let component: UserTopicsComponent;
  let fixture: ComponentFixture<UserTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
