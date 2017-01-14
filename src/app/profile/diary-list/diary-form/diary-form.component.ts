import { Component, EventEmitter, Output } from '@angular/core';
import Diary from '../../../shared/diary.model';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent {
  @Output() addDiary = new EventEmitter();

  add(title: string): void {
    let newDiary = new Diary();
    newDiary.title = title;
    newDiary.description = 'some description';
    this.addDiary.emit(newDiary);
  }
}
