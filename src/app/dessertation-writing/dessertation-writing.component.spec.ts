import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertationWritingComponent } from './dessertation-writing.component';

describe('DessertationWritingComponent', () => {
  let component: DessertationWritingComponent;
  let fixture: ComponentFixture<DessertationWritingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertationWritingComponent]
    });
    fixture = TestBed.createComponent(DessertationWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
