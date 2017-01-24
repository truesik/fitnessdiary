import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { ROUTES } from './app-routing.module';

import { DiaryService } from './shared/diary.service';
import { ExerciseService } from './shared/exercise.service';
import { ExerciseSetService } from './shared/exercise-set.service';
import { UserService } from './shared/user.service';
import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryListComponent } from './profile/diary-list/diary-list.component';
import { DiaryFormComponent } from './profile/diary-list/diary-form/diary-form.component';
import { DiaryItemComponent } from './profile/diary-list/diary-item/diary-item.component';
import { ExerciseListComponent } from './diary/exercise-list/exercise-list.component';
import { ExerciseFormComponent } from './diary/exercise-list/exercise-form/exercise-form.component';
import { ExerciseItemComponent } from './diary/exercise-list/exercise-item/exercise-item.component';
import { ExerciseSetListComponent } from './diary/exercise-list/exercise-item/exercise-set-list/exercise-set-list.component';
import { ExerciseSetFormComponent } from './diary/exercise-list/exercise-item/exercise-set-list/exercise-set-form/exercise-set-form.component';
import { ExerciseSetItemComponent } from './diary/exercise-list/exercise-item/exercise-set-list/exercise-set-item/exercise-set-item.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    DiaryListComponent,
    DiaryComponent,
    DiaryFormComponent,
    ExerciseFormComponent,
    ExerciseSetFormComponent,
    ExerciseItemComponent,
    ExerciseSetItemComponent,
    DiaryItemComponent,
    ExerciseListComponent,
    ExerciseSetListComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule.forRoot()
  ],
  providers: [
    DiaryService,
    ExerciseService,
    ExerciseSetService,
    UserService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
