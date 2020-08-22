import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { TrainingService } from 'src/app/training/training.service';
import { Training } from 'src/app/models/training.model';
import { map } from 'rxjs/operators';
import { Exercise } from 'src/app/models/exercise.model';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-training-default',
  templateUrl: './training-default.component.html',
  styleUrls: ['./training-default.component.css']
})
export class TrainingDefaultComponent implements OnInit {

  trainings: Training[] = [];

  constructor(
    public session: SessionService,
    public trainingService: TrainingService
  ) { 
    this.trainings = this.trainingService.getTrainings();
  }

  openDialog() {
    /*const dialogRef = this.dialog.open(PlayerNewComponent, {
      width: '500px',
    });

    this.subs.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
      })
    );*/
  }

  ngOnInit(): void {
    this.session.trainingsSpinnerFlag = true;
    this.trainings.forEach(training => {
      this.trainingService.getTrainingDetails(training.getId())
          .pipe(map((response1 => {
            const exerciseTraining: Exercise[] = [];
            for(const key in response1){
              if(response1.hasOwnProperty(key)) {
                const exercise = plainToClass(Exercise, response1[key]);
                exerciseTraining.push(exercise);
              }
            }
            return exerciseTraining;
          }))).subscribe(response2 => {
            training.setExercises(response2);
            this.session.trainingsSpinnerFlag = false;
          })
    })
  }

}
