import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { ExerciseService } from 'src/app/exercise/exercise.service';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-exercise-default',
  templateUrl: './exercise-default.component.html',
  styleUrls: ['./exercise-default.component.css']
})
export class ExerciseDefaultComponent implements OnInit {

  exercises: Exercise[] = [];

  constructor(
    public session: SessionService,
    public exerciseService: ExerciseService
  ) { 
    this.exercises = this.exerciseService.getExerciseList();
  }

  ngOnInit(): void {
  }
}
