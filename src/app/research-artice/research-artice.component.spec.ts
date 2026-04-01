import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchArticeComponent } from './research-artice.component';

describe('ResearchArticeComponent', () => {
  let component: ResearchArticeComponent;
  let fixture: ComponentFixture<ResearchArticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchArticeComponent]
    });
    fixture = TestBed.createComponent(ResearchArticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
