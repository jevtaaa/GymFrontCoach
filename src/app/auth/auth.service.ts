import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Coach } from '../models/coach.model';
import { SessionService } from '../session.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuth = false;
    loggedCoach: Coach;
    token: string;

    constructor(private http: HttpClient, private router: Router, private session: SessionService) {

    }

    logIn(username: string, password: string) {
        const httpBody = {
            "username": username,
            "password": password
          };
          return this.http.patch(this.session.ngrok + '/coaches/login', httpBody);
    }

    logOut() {
        localStorage.clear();
        this.token = '';
        this.loggedCoach = null;
        this.isAuth = false;
        this.router.navigateByUrl('/login');
      }
}