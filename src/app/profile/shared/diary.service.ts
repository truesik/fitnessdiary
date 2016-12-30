import { Injectable } from '@angular/core';

import Diary from './diary.model';

@Injectable()
export class DiaryService {
  private diaries: Array<Diary> = [];
  private lastId: number = 0;

  constructor() { }

  getAllDiaries(): Array<Diary> {
    return this.diaries;
  }

  getDiaryById(id: number): Diary {
    return this.diaries.find(diary => diary.id === id);
  }

  getDiaryByTitle(title: string): Diary {
    return this.diaries.find(diary => diary.title === title);
  }

  addDiary(diary: Diary) {
    diary.id = ++this.lastId;
    this.diaries.push(diary);
  }

  removeDiary(diary: Diary) {
    const index = this.diaries.indexOf(diary);
    this.diaries.splice(index, 1);
  }
}
