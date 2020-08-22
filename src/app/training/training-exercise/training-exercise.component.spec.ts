import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingExerciseComponent } from './training-exercise.component';

describe('TrainingExerciseComponent', () => {
  let component: TrainingExerciseComponent;
  let fixture: ComponentFixture<TrainingExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
