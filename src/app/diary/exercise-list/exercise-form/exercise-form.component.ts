import { Component, Input, Output, EventEmitter } from '@angular/core';

import Exercise from '../../../shared/excercise.model';
import Diary from '../../../shared/diary.model';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent {
  @Input() diary: Diary;
  @Output() addExercise = new EventEmitter();

  add(title: string) {
    const exercise = new Exercise();
    exercise.title = title;
    exercise.diaryId = this.diary.id;
    this.addExercise.emit(exercise);
  }
}
