import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import Exercise from './excercise.model';

@Injectable()
export class ExerciseService {
  private EXERCISES_URL = '/api/exercises';
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getAllExercisesByDiaryId(diaryId: number): Observable<Exercise[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.EXERCISES_URL, {id: diaryId}, options)
      .map((response: Response) => response.json() as Exercise[])
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getExerciseById(id: number): Observable<Exercise> {
    return this.http.get(`${this.EXERCISES_URL}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addExercise(exercise: Exercise): Observable<Exercise> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.EXERCISES_URL, exercise, options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  removeExercise(exercise: Exercise): Observable<number> {
    return this.http.delete(`${this.EXERCISES_URL}/${exercise.id}`)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
