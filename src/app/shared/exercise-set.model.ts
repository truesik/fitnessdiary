export default class ExerciseSet {
  id: number;
  weight: number;
  reps: number;
  warmUp: boolean = false;

  constructor(object) {
    Object.assign(this, object);
  }
}
