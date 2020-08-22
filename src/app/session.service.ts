import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CoachEditComponent } from './coach/coach-edit/coach-edit.component';
import { ExerciseService } from './exercise/exercise.service';
import { Exercise } from './models/exercise.model';
import { plainToClass } from 'class-transformer';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    loginSpinnerFlag: boolean;
    bottomSheetSpinnerFlag: boolean;
    exercisesSpinnerFlag: boolean;
    homeSpinnerFlag: boolean;

    editBottomSheetRef: MatBottomSheetRef<CoachEditComponent>;

    ngrok: string = 'https://b5dce8d9c7d6.ngrok.io';

    constructor() {}

    
    
}