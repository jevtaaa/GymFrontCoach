import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ExerciseService } from '../exercise/exercise.service';
import { SessionService } from '../session.service';
import { Exercise } from '../models/exercise.model';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { TrainingService } from '../training/training.service';
import { Training } from '../models/training.model';
import { ClientService } from '../client/client.service';
import { Client } from '../models/client.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authServ: AuthService, 
    public exerciseService: ExerciseService, 
    public session: SessionService, 
    public trainingService: TrainingService, 
    public clientService: ClientService
    ) { }

  ngOnInit(): void {
    console.log("USAO");
    this.session.homeSpinnerFlag = true;
    this.exerciseService.getAllExercises()
    .pipe(map((responseData => {
      const exerciseList: Exercise[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)) {
          const exercise = plainToClass(Exercise, responseData[key]);
          exerciseList.push(exercise);
        }
      }
      return exerciseList;
    })))
    .subscribe(response => {
      this.exerciseService.exercises = response;
      this.trainingService.getAllTrainings()
      .pipe(map((trainings => {
        const trainingList: Training[] = [];
        for(const key in trainings){
        if(trainings.hasOwnProperty(key)) {
          const training = plainToClass(Training, trainings[key]);
          trainingList.push(training);
        }
      }
      return trainingList;
      })))
      .subscribe(response1 => {
        this.trainingService.trainings = response1;
        this.clientService.getAllClients()
      .pipe(map((clients => {
        const clientList: Client[] = [];
        for(const key in clients){
        if(clients.hasOwnProperty(key)) {
          const client = plainToClass(Client, clients[key]);
          if(clients[key].training_id){
            this.trainingService.getSingleTraining(clients[key].training_id)
            .subscribe(res => {
              const training = plainToClass(Training, res);
              client.setTraining(training);
            })
          }else {
            client.setTraining(null);
          }
          if(!clients[key].bio){
            client.setBio("No biography!");
          }
          clientList.push(client);
        }
      }
      return clientList;
      })))
      .subscribe(response2 => {
        this.session.homeSpinnerFlag = false;
        this.clientService.clients = response2;
      })
      })
    })
  }

}
