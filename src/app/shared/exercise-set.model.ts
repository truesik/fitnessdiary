export default class ExerciseSet {
  id: number;
  weight: number;
  reps: number;
  warmUp: boolean = false;
  exerciseId: number;

  constructor(json?) {
    if (json) {
      Object.assign(this, json);
    }
  }
}
