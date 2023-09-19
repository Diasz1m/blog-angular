import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postURL = 'http://localhost:8080/';

  login(email: string, password: string) {
    return this.http.post(`${this.postURL}login`, {
      email,
      password
    });
  }
}
