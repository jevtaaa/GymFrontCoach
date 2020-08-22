import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { AuthService } from '../auth/auth.service';
import { Exercise } from '../models/exercise.model';

@Injectable({
    providedIn: 'root',
})
export class ExerciseService {
    
    exercises: Exercise[] = [];

    constructor(private http: HttpClient, private router: Router, public authServ: AuthService, private session: SessionService) {}
    
    getAllExercises() {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
          }
          const httpOptions = {
            headers: new HttpHeaders({
              Authorization: this.authServ.token,
            })
        };
        return this.http.get(this.session.ngrok+'/exercises', httpOptions);
    }

    getExerciseList() {
        return this.exercises;
    }
}