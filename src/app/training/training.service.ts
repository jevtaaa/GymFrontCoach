import { Injectable } from '@angular/core';
import { Training } from '../models/training.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SessionService } from '../session.service';
import { Exercise } from '../models/exercise.model';
@Injectable({
    providedIn: 'root',
})
export class TrainingService {

    trainings: Training[] = [];

    constructor(private http: HttpClient, private router: Router, public authServ: AuthService, private session: SessionService) {}

    getAllTrainings() {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
          }
          const httpOptions = {
            headers: new HttpHeaders({
              Authorization: this.authServ.token,
            })
        };
        return this.http.get(this.session.ngrok+'/trainings', httpOptions);
    }

    getSingleTraining(id: number) {
      if(this.authServ.token === undefined || this.authServ.token === null){
          this.router.navigateByUrl('/login');
        }
        const httpOptions = {
          headers: new HttpHeaders({
            Authorization: this.authServ.token,
          })
      };
      return this.http.get(this.session.ngrok+'/trainings/single/'+id, httpOptions);
    }

    getTrainingDetails(id: number) {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
          }
          const httpOptions = {
            headers: new HttpHeaders({
              Authorization: this.authServ.token,
            })
        };
        return this.http.get(this.session.ngrok+'/trainings/details/'+id, httpOptions);
    }

    deleteTraining(id: number) {
        if(this.authServ.token === undefined || this.authServ.token === null){
            this.router.navigateByUrl('/login');
          }
          const httpOptions = {
            headers: new HttpHeaders({
              Authorization: this.authServ.token,
            })
        };
        return this.http.delete(this.session.ngrok+'/trainings/delete/'+id, httpOptions);
    }

    saveTraining(name: string, description: string, exercises: Exercise[]) {
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
        "description": description,
        "exercises": exercises
      };
      
      return this.http.put(this.session.ngrok+'/trainings/save',httpBody, httpOptions);
    }

    removeTraining(id: number) {
        let index = this.trainings.indexOf(this.trainings.find(x => x.getId() == id));
        this.trainings.splice(index, 1);
      }

    getTrainings() {
        return this.trainings;
    }

    getTrainingById(id: number) {
      return this.trainings.find(x => x.getId() === id);
    }
    
}