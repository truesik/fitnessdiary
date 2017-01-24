import { Component, OnInit, Input } from '@angular/core';
import Exercise from '../../../../shared/excercise.model';
import ExerciseSet from '../../../../shared/exercise-set.model';
import { ExerciseSetService } from '../../../../shared/exercise-set.service';

@Component({
  selector: 'app-exercise-set-list',
  templateUrl: './exercise-set-list.component.html',
  styleUrls: ['./exercise-set-list.component.css']
})
export class ExerciseSetListComponent {
  @Input() exercise: Exercise;

  constructor(private exerciseSetService: ExerciseSetService) {
  }

  addExerciseSet(exerciseSet: ExerciseSet) {
    this.exerciseSetService
      .addSet(exerciseSet)
      .subscribe(
        (set: ExerciseSet) => this.exercise.exerciseSets.push(set)
      );
  }

  removeExerciseSet(exerciseSet: ExerciseSet) {
    this.exerciseSetService
      .removeSet(exerciseSet)
      .subscribe(
        () => {
          const index = this.exercise.exerciseSets.indexOf(exerciseSet);
          this.exercise.exerciseSets.splice(index, 1);
        }
      );
  }
}
