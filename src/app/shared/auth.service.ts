import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import User from './user.model';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(userCredentials) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('/api/login', userCredentials, options)
      .map((response: Response) => response.json())
      .map(json => new User(json))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('/api/login', {}, options)
      .map((response: Response) => response)
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
