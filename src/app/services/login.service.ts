import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/enviroment.prod';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postURL = environment.apiUrl + 'users/';

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.postURL}login`, { email, password }).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      }),
      catchError((err: any) => {
        console.log(err);
        throw err;
      })
    );
  }
  getUserById(userId: Number): Observable<User> {
    return this.http.get<User>(`${this.postURL}get/` + userId).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: any) => {
        throw err;
      })
    );
  }

}
