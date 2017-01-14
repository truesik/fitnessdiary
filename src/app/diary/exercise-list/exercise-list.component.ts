import { Component, Input } from '@angular/core';

import { ExerciseService } from '../../shared/exercise.service';
import Exercise from '../../shared/excercise.model';
import Diary from '../../shared/diary.model';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent {
  @Input() diary: Diary[];
  @Input() exercises: Exercise[];

  constructor(private exerciseService: ExerciseService) {
  }

  addExercise(newExercise: Exercise): void {
    this.exerciseService
      .addExercise(newExercise)
      .subscribe(
        (exercise: Exercise) => this.exercises.push(exercise)
      );
  }

  removeExercise(exercise: Exercise): void {
    this.exerciseService
      .removeExercise(exercise)
      .subscribe(
        () => {
          const index = this.exercises.indexOf(exercise);
          this.exercises.splice(index, 1);
        });
  }
}
