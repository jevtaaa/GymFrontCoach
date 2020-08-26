import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CoachComponent } from './coach/coach.component';
import { ExerciseDefaultComponent } from './exercise/exercise-default/exercise-default.component';
import { ExerciseItemComponent } from './exercise/exercise-item/exercise-item.component';
import { TrainingDefaultComponent } from './training/training-default/training-default.component';
import { TrainingItemComponent } from './training/training-item/training-item.component';
import { TrainingNewComponent } from './training/training-new/training-new.component';
import { TrainingDeleteComponent } from './training/training-delete/training-delete.component';
import { TrainingExerciseComponent } from './training/training-exercise/training-exercise.component';
import { ClientDefaultComponent } from './client/client-default/client-default.component';
import { ClientItemComponent } from './client/client-item/client-item.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientHistoryComponent } from './client/client-history/client-history.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoachEditComponent } from './coach/coach-edit/coach-edit.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ClientHistoryItemComponent } from './client/client-history/client-history-item/client-history-item.component';
import { ExerciseNewComponent } from './exercise/exercise-new/exercise-new.component';
import { ExerciseDeleteComponent } from './exercise/exercise-delete/exercise-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    CoachComponent,
    CoachEditComponent,
    ExerciseDefaultComponent,
    ExerciseItemComponent,
    TrainingDefaultComponent,
    TrainingItemComponent,
    TrainingNewComponent,
    TrainingDeleteComponent,
    TrainingExerciseComponent,
    ClientDefaultComponent,
    ClientItemComponent,
    ClientDetailComponent,
    ClientHistoryComponent,
    ClientHistoryItemComponent,
    ExerciseNewComponent,
    ExerciseDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
