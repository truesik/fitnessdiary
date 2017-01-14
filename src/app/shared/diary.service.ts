import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import Diary from './diary.model';
import { Observable } from 'rxjs';

@Injectable()
export class DiaryService {
  private DIARIES_URL = '/api/diaries';

  constructor(private http: Http) {
  }

  getAllDiaries(): Observable<Diary[]> {
    return this.http.get(this.DIARIES_URL)
      .map((response: Response) => response.json())
      .map(json => json.map(diary => new Diary(diary)))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getDiaryById(id: number): Observable<Diary> {
    return this.http.get(`${this.DIARIES_URL}/${id}`)
      .map((response: Response) => response.json())
      .map(json => new Diary(json))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addDiary(diary: Diary): Observable<Diary> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.DIARIES_URL, diary, options)
      .map((response: Response) => response.json())
      .map(json => new Diary(json))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  removeDiary(diary: Diary): Observable<number> {
    return this.http.delete(`${this.DIARIES_URL}/${diary.id}`)
      .map((response: Response) => Number.parseInt(response.text()))
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
