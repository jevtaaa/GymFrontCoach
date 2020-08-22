import { Injectable } from '@angular/core';
import { SessionService } from '../session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class CoachService {

    constructor(private http: HttpClient, private router: Router, private session: SessionService, public authServ: AuthService) {

    }

    updateCoach(name:string, surname:string, username: string, email: string, password: string, bio: string) {
        if(this.authServ.token === undefined || this.authServ.token === null){
          this.router.navigateByUrl('/login');
        }
        const httpOptions = {
          headers: new HttpHeaders({
            Authorization: this.authServ.token,
          })
        };
        const httpBody = {
          "name": name,
          "surname": surname,
          "username": username,
          "email": email,
          "password": password,
          "bio": bio
        };
        return this.http.put(this.session.ngrok+'/coaches/edit',httpBody, httpOptions);
      }
}