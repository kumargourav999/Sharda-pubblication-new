import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisEditingComponent } from './thesis-editing.component';

describe('ThesisEditingComponent', () => {
  let component: ThesisEditingComponent;
  let fixture: ComponentFixture<ThesisEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThesisEditingComponent]
    });
    fixture = TestBed.createComponent(ThesisEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
