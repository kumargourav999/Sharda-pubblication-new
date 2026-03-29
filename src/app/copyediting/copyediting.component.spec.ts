import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyeditingComponent } from './copyediting.component';

describe('CopyeditingComponent', () => {
  let component: CopyeditingComponent;
  let fixture: ComponentFixture<CopyeditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyeditingComponent]
    });
    fixture = TestBed.createComponent(CopyeditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
