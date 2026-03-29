import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OJSComponent } from './ojs.component';

describe('OJSComponent', () => {
  let component: OJSComponent;
  let fixture: ComponentFixture<OJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OJSComponent]
    });
    fixture = TestBed.createComponent(OJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
