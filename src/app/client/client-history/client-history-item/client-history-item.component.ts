import { Component, OnInit, Input } from '@angular/core';
import { History } from 'src/app/models/history.model';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from 'src/app/session.service';
import { TrainingExerciseComponent } from 'src/app/training/training-exercise/training-exercise.component';

@Component({
  selector: 'app-client-history-item',
  templateUrl: './client-history-item.component.html',
  styleUrls: ['./client-history-item.component.css']
})
export class ClientHistoryItemComponent implements OnInit {

  @Input() history: History;

  constructor(
    public dialog: MatDialog,
    public session: SessionService
  ) { }

  ngOnInit(): void {
    
  }

  openExerciseDialog() {
    const dialogRef = this.dialog.open(TrainingExerciseComponent, {
      width: '1000px',
      data: { training: this.history.getTraining() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
