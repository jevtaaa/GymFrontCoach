import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDefaultComponent } from './exercise-default.component';

describe('ExerciseDefaultComponent', () => {
  let component: ExerciseDefaultComponent;
  let fixture: ComponentFixture<ExerciseDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
