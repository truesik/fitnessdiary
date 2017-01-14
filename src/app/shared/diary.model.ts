import Exercise from './excercise.model';

export default class Diary {
  id: number;
  title: string;
  description: string;
  exercises: Array<Exercise> = [];
  createdAt: Date;

  constructor(json?) {
    if (json) {
      Object.assign(this, json, {
        createdAt: new Date(json.created_at),
        exercises: json.exercises ? json.exercises.map(exercise => new Exercise(exercise)) : []
      });
    }
  }

  public getCurrentWeek(): number {
    return Math.floor((this.createdAt.getDate() - new Date().getDate()) / 7);
  }
}
