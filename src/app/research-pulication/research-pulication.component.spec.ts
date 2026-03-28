import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchPulicationComponent } from './research-pulication.component';

describe('ResearchPulicationComponent', () => {
  let component: ResearchPulicationComponent;
  let fixture: ComponentFixture<ResearchPulicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchPulicationComponent]
    });
    fixture = TestBed.createComponent(ResearchPulicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
