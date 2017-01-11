import { Component, Input, Output, EventEmitter } from '@angular/core';

import Diary from '../../../shared/diary.model';

@Component({
  selector: 'app-diary-item',
  templateUrl: './diary-item.component.html',
  styleUrls: ['./diary-item.component.css']
})
export class DiaryItemComponent {
  @Input() diary: Diary;
  @Output() removeDiary = new EventEmitter();

  remove(): void {
    this.removeDiary.emit(this.diary);
  }
}
