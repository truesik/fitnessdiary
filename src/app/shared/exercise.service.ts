import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import Exercise from './excercise.model';

@Injectable()
export class ExerciseService {
  private EXERCISES_URL = '/api/exercises';

  constructor(private http: Http) {
  }

  getAllExercisesByDiaryId(diaryId: number): Observable<Exercise[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.EXERCISES_URL, {id: diaryId}, options)
      .map((response: Response) => response.json())
      .map(jsonArray => jsonArray.map(exerciseJson => new Exercise(exerciseJson)))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getExerciseById(id: number): Observable<Exercise> {
    return this.http.get(`${this.EXERCISES_URL}/${id}`)
      .map((response: Response) => response.json())
      .map(json => new Exercise(json))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addExercise(newExercise: Exercise): Observable<Exercise> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(`${this.EXERCISES_URL}/add`, newExercise, options)
      .map((response: Response) => response.json())
      .map(json => new Exercise(json))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  removeExercise(exercise: Exercise): Observable<number> {
    return this.http.delete(`${this.EXERCISES_URL}/${exercise.id}`)
      .map((response: Response) => Number.parseInt(response.text()))
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
