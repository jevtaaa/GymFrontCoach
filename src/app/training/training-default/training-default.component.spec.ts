import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDefaultComponent } from './training-default.component';

describe('TrainingDefaultComponent', () => {
  let component: TrainingDefaultComponent;
  let fixture: ComponentFixture<TrainingDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
