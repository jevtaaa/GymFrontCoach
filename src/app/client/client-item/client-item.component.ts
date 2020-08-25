import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { SessionService } from 'src/app/session.service';
import { ClientService } from '../client.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { ClientHistoryComponent } from '../client-history/client-history.component';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  @Input() client: Client;

  constructor(
    public session: SessionService,
    public clientService: ClientService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openHistoryDialog() {
    const dialogRef = this.dialog.open(ClientHistoryComponent, {
      width: '800px',
      data: { history: this.client.history, client: this.client },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openDetailsDialog() {
    const dialogRef = this.dialog.open(ClientDetailComponent, {
      width: '800px',
      data: { client: this.client },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
