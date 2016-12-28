import { Injectable } from '@angular/core';
import Diary from './diary.model';

@Injectable()
export class DiaryService {
  constructor() { }

  getDiaries(): Diary[] {
    return [
      new Diary('My Diary', new Date()),
      new Diary('Diary 2', new Date())
    ];
  }

}
