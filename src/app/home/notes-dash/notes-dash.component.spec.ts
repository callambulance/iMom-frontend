import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDashComponent } from './notes-dash.component';

describe('NotesDashComponent', () => {
  let component: NotesDashComponent;
  let fixture: ComponentFixture<NotesDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
