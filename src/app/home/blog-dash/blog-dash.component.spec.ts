import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDashComponent } from './blog-dash.component';

describe('BlogDashComponent', () => {
  let component: BlogDashComponent;
  let fixture: ComponentFixture<BlogDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
