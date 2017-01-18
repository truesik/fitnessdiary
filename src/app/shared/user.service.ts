import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import User from './user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private USERS_URL = '/api/users';

  constructor(private http: Http) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get(this.USERS_URL)
      .map((response: Response) => response.json())
      .map(json => json.map(user => new User(user)))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get(`${this.USERS_URL}/${id}`)
      .map((response: Response) => response.json())
      .map(json => new User(json))
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addUser(user: User): Observable<User> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.USERS_URL, user, options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  removeUser(user: User): Observable<number> {
    return this.http.delete(`${this.USERS_URL}/${user.id}`)
      .map((response: Response) => Number.parseInt(response.text()))
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
