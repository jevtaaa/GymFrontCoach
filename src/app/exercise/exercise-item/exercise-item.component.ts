import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';
import { SessionService } from 'src/app/session.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseDeleteComponent } from '../exercise-delete/exercise-delete.component'


@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {
  @Input() exercise: Exercise;
  rb: number;
  constructor(
    public session: SessionService,
    private router: Router,
    public dialog: MatDialog
  ) { 
    
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(ExerciseDeleteComponent, {
      width: '525px',
      data: { exercise: this.exercise },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  isExerciseRoute() {
    return this.router.url === '/exercises';
  }

  ngOnInit(): void {
    this.rb = this.exercise.getId();
  }

}
