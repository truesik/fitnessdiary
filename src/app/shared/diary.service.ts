import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import Diary from './diary.model';
import { Observable } from 'rxjs';

@Injectable()
export class DiaryService {
  private DIARIES_URL = '/api/diaries';
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getAllDiaries(): Observable<Array<Diary>> {
    return this.http
      .get(this.DIARIES_URL)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        throw Observable.throw(error);
      });
  }

  getDiaryById(id: number): Observable<Diary> {
    return this.http.get(`${this.DIARIES_URL}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        throw Observable.throw(error);
      });
  }

  addDiary(diary: Diary): Observable<Diary> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.DIARIES_URL, diary, options)
      .map((response: Response) => response.json())
      .catch((error: Response | any) => {
        throw Observable.throw(error);
      });
  }

  removeDiary(diary: Diary): Observable<number> {
    return this.http.delete(`${this.DIARIES_URL}/${diary.id}`)
      .map((response: Response) => {
        response.text();
      })
      .catch((error: Response) => {
        throw Observable.throw(error);
      });
  }
}
