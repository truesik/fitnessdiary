import ExerciseSet from './exercise-set.model';

export default class Exercise {
  id: number;
  title: string;
  private exerciseSets: Array<ExerciseSet> = [];
  muscleGroup: string;
  date: Date;
  diaryId: number;

  constructor(object) {
    Object.assign(this, object);
  }

  public getExerciseSets() {
    return this.exerciseSets;
  }

  public setExerciseSets(exerciseSets: Array<ExerciseSet>) {
    this.exerciseSets = exerciseSets;
  }

  public addExerciseSet(exerciseSet: ExerciseSet) {
    this.exerciseSets.push(exerciseSet);
  }

  public removeExerciseSet(exerciseSet: ExerciseSet) {
    const index = this.exerciseSets.indexOf(exerciseSet);
    this.exerciseSets.splice(index, 1);
  }
}
