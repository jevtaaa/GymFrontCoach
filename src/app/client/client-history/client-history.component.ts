import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SessionService } from 'src/app/session.service';
import { ClientService } from '../client.service';
import { TrainingService } from 'src/app/training/training.service';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Training } from 'src/app/models/training.model';
import { History } from 'src/app/models/history.model';
import { Exercise } from 'src/app/models/exercise.model';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-history',
  templateUrl: './client-history.component.html',
  styleUrls: ['./client-history.component.css']
})
export class ClientHistoryComponent implements OnInit {

  history: History[] = [];
  client: Client;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public session: SessionService,
    public dialogRef: MatDialogRef<ClientHistoryComponent>,
    public clientService: ClientService,
    public trainingService: TrainingService,
    public dialog: MatDialog
  ) {
    this.history = data.history;
    this.client = data.client;
    this.session.clientHistoryDialogRef = this.dialogRef;
   }

  ngOnInit(): void {
  }
  
  close() {
    this.session.clientHistoryDialogRef.close();
  }

}
