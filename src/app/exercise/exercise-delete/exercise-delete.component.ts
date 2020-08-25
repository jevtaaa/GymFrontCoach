import { Component, OnInit, Inject } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { ExerciseService } from '../exercise.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exercise-delete',
  templateUrl: './exercise-delete.component.html',
  styleUrls: ['./exercise-delete.component.css']
})
export class ExerciseDeleteComponent implements OnInit {

  constructor(
    public session: SessionService,
    public exerciseService: ExerciseService,
    public dialogRef: MatDialogRef<ExerciseDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.session.deleteExerciseRef = this.dialogRef;
  }

  ngOnInit(): void {
  }

  deleteExercise() {
    this.session.dialogSpinnerFlag = true;
    this.exerciseService.deleteExercise(this.data.exercise.getId())
    .subscribe(response => {
      this.exerciseService.removeExercise(this.data.exercise.getId());
      this.session.dialogSpinnerFlag = false;
      this.session.deleteExerciseRef.close();
      this.session.successSnackBar("Exercise has been deleted!");
    }, (err) => {
        console.log(err.msg);
      });
  }

}
