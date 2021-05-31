import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractionsComponent } from './contractions.component';

describe('ContractionsComponent', () => {
  let component: ContractionsComponent;
  let fixture: ComponentFixture<ContractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
