import { Component, OnInit, Inject } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { TrainingService } from '../training.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-training-delete',
  templateUrl: './training-delete.component.html',
  styleUrls: ['./training-delete.component.css']
})
export class TrainingDeleteComponent implements OnInit {

  constructor(
    public session: SessionService,
    public trainService: TrainingService,
    public dialogRef: MatDialogRef<TrainingDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.session.deleteDialogRef = this.dialogRef;
  }

  ngOnInit(): void {
  }

  deleteTraining() {
    this.session.dialogSpinnerFlag = true;
    this.trainService.deleteTraining(this.data.training.getId())
    .subscribe(response => {
      this.trainService.removeTraining(this.data.training.getId());
      this.session.dialogSpinnerFlag = false;
      this.session.deleteDialogRef.close();
      this.session.successSnackBar("Training has been deleted!");
    }, (err) => {
        console.log(err.msg);
      });
  }

  close() {
    this.session.deleteDialogRef.close();
  }

}
