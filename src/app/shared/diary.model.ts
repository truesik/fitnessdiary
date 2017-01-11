import Exercise from './excercise.model';

export default class Diary {
  id: number;
  title: string;
  startDate: Date;
  description: string;
  exercises: Array<Exercise> = [];

  public getExercises(): Array<Exercise> {
    return this.exercises;
  }

  public addExercise(exercise: Exercise) {
    this.exercises.push(exercise);
  }

  public removeExercise(exercise: Exercise) {
    const index = this.exercises.indexOf(exercise);
    this.exercises.splice(index, 1);
  }

  public getCurrentWeek(): number {
    return Math.floor((this.startDate.getDate() - new Date().getDate()) / 7);
  }
}
