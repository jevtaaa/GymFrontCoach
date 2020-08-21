import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../session.service';
import { AuthService } from '../auth/auth.service';
import { plainToClass } from 'class-transformer';
import { Coach } from '../models/coach.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(public session: SessionService, public authServ: AuthService, private router: Router) { }

  initForm() {
    this.authForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  logIn() {
    this.session.loginSpinnerFlag = true;
    this.authServ.logIn(this.authForm.controls.userName.value, this.authForm.controls.password.value)
    .subscribe((data:any) => {
      if(data==null){
        return;
      }
      this.authServ.isAuth = true;
      this.authServ.token = 'Bearer' + data.token;
      const coach = plainToClass(Coach, data);
      this.authServ.loggedCoach = coach;
      this.session.loginSpinnerFlag = false;
      console.log("ULOGOVAN");
      this.router.navigateByUrl('/home');
    }, (err) => {
      if(err.status === 404) {
        this.session.loginSpinnerFlag = false;
        console.log("Wrong username or password!")
      }
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

}
