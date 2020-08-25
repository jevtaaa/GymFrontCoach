import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { ExerciseService } from 'src/app/exercise/exercise.service';
import { Exercise } from 'src/app/models/exercise.model';
import { ExerciseNewComponent } from 'src/app/exercise/exercise-new/exercise-new.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-exercise-default',
  templateUrl: './exercise-default.component.html',
  styleUrls: ['./exercise-default.component.css']
})
export class ExerciseDefaultComponent implements OnInit {

  exercises: Exercise[] = [];
  constructor(
    public session: SessionService,
    public exerciseService: ExerciseService,
    public dialog: MatDialog
  ) { 
    this.exercises = this.exerciseService.getExerciseList();
  }

  ngOnInit(): void {
  }

  addDialog() {
    const dialogRef = this.dialog.open(ExerciseNewComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
    })
  }
}
