import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaphesingComponent } from './paraphesing.component';

describe('ParaphesingComponent', () => {
  let component: ParaphesingComponent;
  let fixture: ComponentFixture<ParaphesingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParaphesingComponent]
    });
    fixture = TestBed.createComponent(ParaphesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
