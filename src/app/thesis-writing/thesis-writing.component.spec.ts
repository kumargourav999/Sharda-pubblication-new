import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisWritingComponent } from './thesis-writing.component';

describe('ThesisWritingComponent', () => {
  let component: ThesisWritingComponent;
  let fixture: ComponentFixture<ThesisWritingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThesisWritingComponent]
    });
    fixture = TestBed.createComponent(ThesisWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
