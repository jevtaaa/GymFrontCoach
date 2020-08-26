import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExerciseService } from '../exercise.service';
import { SessionService } from 'src/app/session.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-exercise-new',
  templateUrl: './exercise-new.component.html',
  styleUrls: ['./exercise-new.component.css']
})
export class ExerciseNewComponent implements OnInit {

  addExerciseForm: FormGroup;

  constructor(
    public exerciseService: ExerciseService,
    public session: SessionService,
    public dialogRef: MatDialogRef<ExerciseNewComponent>
  ) { 
    this.session.newDialogRef = dialogRef;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addExerciseForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    });
  }

  saveExercise() {
    this.session.dialogSpinnerFlag = true;
    let name = this.addExerciseForm.controls.fullName.value;
    let description = this.addExerciseForm.controls.description.value;

    this.exerciseService.saveExercise(name, description)
    .subscribe((data: any) => {
      this.session.dialogSpinnerFlag = false;
      const exercise: Exercise =  new Exercise(data.exercise_id, data.name, data.description);
      this.exerciseService.addExerciseToList(exercise);
      this.session.newDialogRef.close();
      this.session.successSnackBar("Successfully saved!");
    }, (err) =>{
      console.log(err.error.msg);
      this.session.dialogSpinnerFlag = false;
      this.session.newDialogRef.close();
    })
  }

  close() {
    this.session.newDialogRef.close();
  }

}
