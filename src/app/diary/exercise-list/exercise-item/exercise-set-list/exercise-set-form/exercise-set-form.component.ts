import { Component, Output, EventEmitter, Input } from '@angular/core';

import ExerciseSet from '../../../../../shared/exercise-set.model';
import Exercise from '../../../../../shared/excercise.model';

@Component({
  selector: 'app-exercise-set-form',
  templateUrl: './exercise-set-form.component.html',
  styleUrls: ['./exercise-set-form.component.css']
})
export class ExerciseSetFormComponent {
  @Input() exercise: Exercise;
  @Output() addSet = new EventEmitter();

  add(data) {
    const exerciseSet = new ExerciseSet();
    exerciseSet.reps = data.reps;
    exerciseSet.weight = data.weight;
    exerciseSet.warmUp = data.warmUp ? true : false;
    exerciseSet.exerciseId = this.exercise.id;
    this.addSet.emit(exerciseSet);
  }
}
