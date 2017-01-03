import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiaryComponent } from './diary/diary.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/diaries/:diaryId', component: DiaryComponent}
];
