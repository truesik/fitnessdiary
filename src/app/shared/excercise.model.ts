import ExerciseSet from './exercise-set.model';

export default class Exercise {
  id: number;
  title: string;
  exerciseSets: Array<ExerciseSet> = [];
  muscleGroup: string;
  diaryId: number;
  createdAt: Date;

  constructor(json?) {
    if (json) {
      Object.assign(this, json, {
        createdAt: new Date(json.created_at),
        exerciseSets: json.exerciseSets ? json.exerciseSets.map(set => new ExerciseSet(set)) : []
      });
    }
  }
}
