import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CoachEditComponent } from '../coach/coach-edit/coach-edit.component';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  constructor(public authServ: AuthService, private bottomSheet: MatBottomSheet) { }

  openEditBottomSheet(): void {
    this.bottomSheet.open(CoachEditComponent, {
      data: { contract: this.authServ.loggedCoach },
    });
  }

  ngOnInit(): void {
  }

}
