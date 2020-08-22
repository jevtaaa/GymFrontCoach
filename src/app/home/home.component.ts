import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ExerciseService } from '../exercise/exercise.service';
import { SessionService } from '../session.service';
import { Exercise } from '../models/exercise.model';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { TrainingService } from '../training/training.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authServ: AuthService, public exerciseService: ExerciseService, public session: SessionService, public trainingService: TrainingService) { }

  ngOnInit(): void {
    console.log("USAO");
    this.session.homeSpinnerFlag = true;
    this.exerciseService.getAllExercises()
    .pipe(map((responseData => {
      const exerciseList: Exercise[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)) {
          const exercise = plainToClass(Exercise, responseData[key]);
          exerciseList.push(exercise);
        }
      }
      return exerciseList;
    })))
    .subscribe(response => {
      this.exerciseService.exercises = response;
      this.trainingService.getAllTrainings()
      .pipe(map((responseData1 => {
        const trainingList: Training[] = [];
        for(const key in responseData1){
        if(responseData1.hasOwnProperty(key)) {
          const training = plainToClass(Training, responseData1[key]);
          trainingList.push(training);
        }
      }
      return trainingList;
      })))
      .subscribe(response1 => {
        this.session.homeSpinnerFlag = false;
        this.trainingService.trainings = response1;
      })
    })
  }

}
