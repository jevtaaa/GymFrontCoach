import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { SessionService } from 'src/app/session.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ExerciseService } from 'src/app/exercise/exercise.service';
import { Exercise } from 'src/app/models/exercise.model';
import { Training } from 'src/app/models/training.model';

@Component({
  selector: 'app-training-new',
  templateUrl: './training-new.component.html',
  styleUrls: ['./training-new.component.css']
})
export class TrainingNewComponent implements OnInit {
  addTrainingForm: FormGroup;
  exercise_id: number;
  exercises: Exercise[] = [];

  constructor(
    public trainingService: TrainingService,
    public session: SessionService,
    public dialogRef: MatDialogRef<TrainingNewComponent>,
    public exerciseService: ExerciseService
  ) {
    this.session.newTrainingDialogRef = this.dialogRef;
   }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addTrainingForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      series: new FormControl('', [Validators.required]),
      repetitions: new FormControl('', [Validators.required])
    });
  }

  close() {
    this.session.newTrainingDialogRef.close();
  }

  addExercise() {
    console.log(this.exercise_id);
    console.log(this.exerciseService.getExerciseList());
    let ex = this.exerciseService.getExerciseList().find(x => x.getId() == this.exercise_id);
    let exercise = new Exercise(this.exercise_id, ex.getName(), ex.getDescription(), this.addTrainingForm.controls.repetitions.value, this.addTrainingForm.controls.series.value);
    this.exercises.push(exercise);
    this.addTrainingForm.controls['series'].reset();
    this.addTrainingForm.controls['repetitions'].reset();
  }

  saveTraining() {
    this.session.dialogSpinnerFlag = true;
    this.trainingService.saveTraining(this.addTrainingForm.controls.fullName.value, this.addTrainingForm.controls.description.value, this.exercises)
    .subscribe((data: any) => {
      console.log(data);
      let train = new Training(data.training_id, data.name, data.description, data.date, this.exercises);
      this.trainingService.getTrainings().push(train);
      this.session.dialogSpinnerFlag=false;
      this.session.newTrainingDialogRef.close();
      this.session.successSnackBar("Successfully saved training!");
    })
    
  }

  removeExercise(id: number) {
    console.log(id);
    let index = this.exercises.indexOf(this.exercises.find(x => x.getId() == id));
    this.exercises.splice(index, 1);
  }

}
