import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadPopupComponent } from './lead-popup.component';

describe('LeadPopupComponent', () => {
  let component: LeadPopupComponent;
  let fixture: ComponentFixture<LeadPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadPopupComponent]
    });
    fixture = TestBed.createComponent(LeadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
