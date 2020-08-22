import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import { CoachComponent } from './coach/coach.component';
import { CoachEditComponent } from './coach/coach-edit/coach-edit.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ExerciseDefaultComponent } from './exercise/exercise-default/exercise-default.component';
import { ExerciseItemComponent } from './exercise/exercise-item/exercise-item.component';
import { TrainingDefaultComponent } from './training/training-default/training-default.component';
import { TrainingEditComponent } from './training/training-edit/training-edit.component';
import { TrainingItemComponent } from './training/training-item/training-item.component';
import { TrainingNewComponent } from './training/training-new/training-new.component';
import { TrainingDeleteComponent } from './training/training-delete/training-delete.component';
import { TrainingExerciseComponent } from './training/training-exercise/training-exercise.component';
import { MatDividerModule } from '@angular/material/divider';


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
    TrainingEditComponent,
    TrainingItemComponent,
    TrainingNewComponent,
    TrainingDeleteComponent,
    TrainingExerciseComponent
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
