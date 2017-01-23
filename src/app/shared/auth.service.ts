import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import User from './user.model';

@Injectable()
export class AuthService {
  private loggedIn: boolean = false;

  constructor(private http: Http) {
  }

  login(userCredentials) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('/api/login', userCredentials, options)
      .map((response: Response) => response.json())
      .map(json => {
        this.loggedIn = true;
        return new User(json);
      })
      .catch((error: Response) => Observable.throw(new Error(`${error.status} ${error.statusText}`)));
  }

  logout() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('/api/logout', {}, options)
      .map((response: Response) => response.json())
      .map(json => {
        json.success ? this.loggedIn = false : this.loggedIn = true;
        return json.success;
      })
      .catch((error: Response) => Observable.throw(new Error(`${error.status} ${error.statusText}`)));
  }

  checkLoggedIn(): Observable<boolean> {
    return this.http.get('/api/loggedIn')
      .map((response: Response) => response.json())
      .map(json => {
        json.isLoggedIn ? this.loggedIn = true : this.loggedIn = false;
        return json.isLoggedIn;
      })
      .catch((error: Response) => Observable.throw(new Error(`${error.status} ${error.statusText}`)));
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
