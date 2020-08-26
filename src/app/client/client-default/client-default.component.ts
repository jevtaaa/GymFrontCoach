import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { SessionService } from 'src/app/session.service';
import { ClientService } from 'src/app/client/client.service';
import { timestamp, map } from 'rxjs/operators';
import { TrainingService } from 'src/app/training/training.service';
import { Exercise } from 'src/app/models/exercise.model';
import { plainToClass } from 'class-transformer';
import { Training } from 'src/app/models/training.model';
import { History } from 'src/app/models/history.model';

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
    this.session.clientsSpinnerFlag = true;
    this.clients.forEach(client => {
      if(client.getTraining()!=null){
      this.trainingService.getTrainingDetails(client.getTraining().getId())
          .pipe(map((response1 => {
            const exerciseTraining: Exercise[] = [];
            for(const key in response1){
              if(response1.hasOwnProperty(key)) {
                const exercise = plainToClass(Exercise, response1[key]);
                exerciseTraining.push(exercise);
              }
            }
            return exerciseTraining;
          }))).subscribe(response2 => {
            
            client.getTraining().setExercises(response2);
          })}
          
          this.clientService.getHistory(client.getId())
          .pipe(map((his => {
        
        const historyList: History[] = [];
        for(const key in his){
          if(his.hasOwnProperty(key)) {
            const hist = plainToClass(History, his[key]);
            if(his[key].training_id){  
              const training = new Training(his[key].training_id);
              hist.setTraining(training); 
            }
            historyList.push(hist);
          }
        }
        this.session.clientsSpinnerFlag = false;
        return historyList;
      })))
      .subscribe(res => {
        client.history = res;
        client.history.forEach(histo => {
          this.trainingService.getSingleTraining(histo.getTraining().getId())
          .subscribe((training: any) => {
            const train = plainToClass(Training, training);
  
            this.trainingService.getTrainingDetails(train.getId())
                .pipe(map((response1 => {
                  const exerciseTraining: Exercise[] = [];
                  for(const key in response1){
                    if(response1.hasOwnProperty(key)) {
                      const exercise = plainToClass(Exercise, response1[key]);
                      exerciseTraining.push(exercise);
                    }
                  }
                  return exerciseTraining;
                }))).subscribe(response2 => {
                  train.setExercises(response2);
                })
            histo.setTraining(train);
          })
        })
      })
    
  
    })
  }

}
