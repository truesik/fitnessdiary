import { Component, OnInit } from '@angular/core';

import { DiaryService } from '../../shared/diary.service';
import Diary from '../../shared/diary.model';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css']
})
export class DiaryListComponent implements OnInit {
  diaries: Diary[] = [];
  error;

  constructor(private diaryService: DiaryService) {
  }

  ngOnInit(): void {
    this.getDiaries();
  }

  getDiaries(): void {
    this.diaryService
      .getAllDiaries()
      .subscribe(
        (diaries: Diary[]) => this.diaries = diaries,
        error => this.error = error
      );
  }

  addDiary(newDiary: Diary): void {
    this.diaryService
      .addDiary(newDiary)
      .subscribe(
        (diary: Diary) => this.diaries.push(diary),
        error => this.error = error
      );
  }

  removeDiary(diary: Diary): void {
    this.diaryService
      .removeDiary(diary)
      .subscribe(
        () => {
          const index = this.diaries.indexOf(diary);
          this.diaries.splice(index, 1);
        },
        error => this.error = error);
  }
}
