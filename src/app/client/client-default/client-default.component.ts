import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { SessionService } from 'src/app/session.service';
import { ClientService } from 'src/app/client/client.service';
import { timestamp } from 'rxjs/operators';
import { TrainingService } from 'src/app/training/training.service';

@Component({
  selector: 'app-client-default',
  templateUrl: './client-default.component.html',
  styleUrls: ['./client-default.component.css']
})
export class ClientDefaultComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    public session: SessionService,
    public clientService: ClientService,
    public trainingService: TrainingService
  ) {
    this.clients = this.clientService.getClients();
   }

  ngOnInit(): void {
    console.log("kurcinela");
  }

}
