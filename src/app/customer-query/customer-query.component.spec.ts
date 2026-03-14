import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQueryComponent } from './customer-query.component';

describe('CustomerQueryComponent', () => {
  let component: CustomerQueryComponent;
  let fixture: ComponentFixture<CustomerQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerQueryComponent]
    });
    fixture = TestBed.createComponent(CustomerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   }) ;
