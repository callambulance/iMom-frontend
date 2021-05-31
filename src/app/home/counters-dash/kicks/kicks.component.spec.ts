import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KicksComponent } from './kicks.component';

describe('KicksComponent', () => {
  let component: KicksComponent;
  let fixture: ComponentFixture<KicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
