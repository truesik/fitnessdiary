import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiaryComponent } from './diary/diary.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuardService } from './shared/auth-guard.service';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'profile/diaries/:diaryId', component: DiaryComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent}
];
