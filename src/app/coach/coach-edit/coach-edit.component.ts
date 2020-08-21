import { Component, OnInit, Inject } from '@angular/core';
import { Coach } from 'src/app/models/coach.model';
import { SessionService } from 'src/app/session.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { CoachService } from '../coach.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-coach-edit',
  templateUrl: './coach-edit.component.html',
  styleUrls: ['./coach-edit.component.css']
})
export class CoachEditComponent implements OnInit {
  editCoachForm: FormGroup;

  constructor(
    public session: SessionService, 
    public bottomSheetRef: MatBottomSheetRef<CoachEditComponent>, 
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public coachService: CoachService,
    public authServ: AuthService) {
      this.session.editBottomSheetRef = this.bottomSheetRef;
   }

   initForm() {
    this.editCoachForm = new FormGroup({
      Username: new FormControl(this.data.contract.getUsername().trim(), [
        Validators.required,
      ]),
      Name: new FormControl(this.data.contract.getName().trim(), [
        Validators.required,
      ]),
      Surname: new FormControl(this.data.contract.getSurname().trim(), [
        Validators.required,
      ]),
      Email: new FormControl(this.data.contract.getEmail().trim(), [
        Validators.required,
      ]),
      Biography: new FormControl(this.data.contract.getBio().trim(), [
        
      ]),
      Password: new FormControl(this.data.contract.getPassword().trim(), [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  editCoach() {
    this.session.bottomSheetSpinnerFlag = true;
    let name = this.editCoachForm.controls.Name.value;
    let surname = this.editCoachForm.controls.Surname.value;
    let email = this.editCoachForm.controls.Email.value;
    let username = this.editCoachForm.controls.Username.value;
    let password = this.editCoachForm.controls.Password.value;
    let bio = this.editCoachForm.controls.Biography.value;

    this.coachService.updateCoach(name, surname, username, email, password, bio)
    .subscribe((data : any) => {
      this.session.bottomSheetSpinnerFlag = false;
      this.authServ.loggedCoach.setName(data.name);
      this.authServ.loggedCoach.setSurname(data.surname);
      this.authServ.loggedCoach.setEmail(data.email);
      this.authServ.loggedCoach.setUsername(data.username);
      this.authServ.loggedCoach.setBio(data.bio);
      this.authServ.loggedCoach.setPassword(data.password);
      if(this.authServ.loggedCoach.getBio().trim().length == 0 || this.authServ.loggedCoach.getBio() === null || this.authServ.loggedCoach.getBio() === undefined){
        this.authServ.loggedCoach.setBio("No biography");
      }
      this.session.editBottomSheetRef.dismiss();
    }, (err) => {
      this.session.bottomSheetSpinnerFlag = false;
      this.session.editBottomSheetRef.dismiss();
      console.log(err);
    })

  }

  close() {
    this.bottomSheetRef.dismiss();
  }

}
