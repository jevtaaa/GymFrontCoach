import { Component, OnInit, Input } from '@angular/core';
import { Training } from 'src/app/models/training.model';
import { SessionService } from 'src/app/session.service';
import { TrainingService } from '../training.service';
import { MatDialog } from '@angular/material/dialog';
import { TrainingExerciseComponent } from '../training-exercise/training-exercise.component';
import { TrainingDeleteComponent } from '../training-delete/training-delete.component';

@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.css']
})
export class TrainingItemComponent implements OnInit {
  @Input() training: Training;

  constructor(
    public session: SessionService,
    public trainingService: TrainingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(TrainingDeleteComponent, {
      width: '525px',
      data: { training: this.training },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openExerciseDialog() {
    const dialogRef = this.dialog.open(TrainingExerciseComponent, {
      width: '1000px',
      data: { training: this.training },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
