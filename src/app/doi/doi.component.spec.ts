import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOIComponent } from './doi.component';

describe('DOIComponent', () => {
  let component: DOIComponent;
  let fixture: ComponentFixture<DOIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DOIComponent]
    });
   fixture = TestBed.createComponent(DOIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
