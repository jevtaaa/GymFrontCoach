import { Injectable } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CoachEditComponent } from './coach/coach-edit/coach-edit.component';
import { TrainingExerciseComponent } from './training/training-exercise/training-exercise.component';
import { TrainingDeleteComponent } from './training/training-delete/training-delete.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    loginSpinnerFlag: boolean;
    bottomSheetSpinnerFlag: boolean;
    trainingsSpinnerFlag: boolean;
    clientsSpinnerFlag: boolean;
    exercisesSpinnerFlag: boolean;
    homeSpinnerFlag: boolean;
    dialogSpinnerFlag: boolean;

    editBottomSheetRef: MatBottomSheetRef<CoachEditComponent>;
    exercisesDialogRef: MatDialogRef<TrainingExerciseComponent>;
    deleteDialogRef: MatDialogRef<TrainingDeleteComponent>;
    clientDetailsDialogRef: MatDialogRef<ClientDetailComponent>;

    ngrok: string = 'https://a43063c809ab.ngrok.io';

    constructor() {}
}