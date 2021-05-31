import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuestionsComponent } from './top-questions.component';

describe('TopQuestionsComponent', () => {
  let component: TopQuestionsComponent;
  let fixture: ComponentFixture<TopQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
