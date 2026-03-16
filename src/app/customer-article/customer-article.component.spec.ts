import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerArticleComponent } from './customer-article.component';

describe('CustomerArticleComponent', () => {
  let component: CustomerArticleComponent;
  let fixture: ComponentFixture<CustomerArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerArticleComponent]
    });
    fixture = TestBed.createComponent(CustomerArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
