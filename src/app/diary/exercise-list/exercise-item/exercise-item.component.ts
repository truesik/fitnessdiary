import { Component, Input, Output, EventEmitter } from '@angular/core';

import Exercise from '../../../shared/excercise.model';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent {
  @Input() exercise: Exercise;
  @Output() removeExercise = new EventEmitter();

  remove() {
    this.removeExercise.emit(this.exercise);
  }
}
