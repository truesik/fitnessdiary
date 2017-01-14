import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import ExerciseSet from './exercise-set.model';

@Injectable()
export class ExerciseSetService {
  private SETS_URL = '/api/sets/';

  constructor(private http: Http) {
  }

  getAllSetsByExerciseId(exerciseId: number): Observable<ExerciseSet[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.SETS_URL, {id: exerciseId}, options)
      .map((response: Response) => response.json())
      .map(jsonArray => jsonArray.map(exerciseSetJson => new ExerciseSet(exerciseSetJson)))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getSetById(id: number): Observable<ExerciseSet> {
    return this.http.get(`${this.SETS_URL}/${id}`)
      .map((response: Response) => response.json())
      .map(json => new ExerciseSet(json))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addSet(set: ExerciseSet): Observable<ExerciseSet> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(`${this.SETS_URL}/add`, set, options)
      .map((response: Response) => response.json())
      .map(json => new ExerciseSet(json))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  removwSet(set: ExerciseSet): Observable<number> {
    return this.http.delete(`${this.SETS_URL}/${set.id}`)
      .map((response: Response) => Number.parseInt(response.text()))
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
