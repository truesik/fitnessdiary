import { Component, Input, Output, EventEmitter } from '@angular/core';

import ExerciseSet from '../../../../../shared/exercise-set.model';

@Component({
  selector: 'app-exercise-set-item',
  templateUrl: './exercise-set-item.component.html',
  styleUrls: ['./exercise-set-item.component.css']
})
export class ExerciseSetItemComponent {
  @Input() exerciseSet: ExerciseSet;
  @Output() removeSet = new EventEmitter();

  remove() {
    this.removeSet.emit(this.exerciseSet);
  }
}
