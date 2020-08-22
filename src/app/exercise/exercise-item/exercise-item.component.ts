import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {
  @Input() exercise: Exercise;
  rb: number;
  constructor(
    public session: SessionService
  ) { 
  }

  ngOnInit(): void {
    this.rb = this.exercise.getId()+1;
  }

}
