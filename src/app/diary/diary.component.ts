import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DiaryService } from '../shared/diary.service';
import Diary from '../shared/diary.model';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diary: Diary;
  error;

  constructor(private diaryService: DiaryService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    let diaryId = this.route.snapshot.params['diaryId'];
    this.diaryService.getDiaryById(diaryId)
      .subscribe(
        (diary: Diary) => {
          this.diary = diary;
          if (this.diary == null) {
            this.router.navigate(['/profile']);
          }
        },
        error => this.error = error
      );
  }
}
