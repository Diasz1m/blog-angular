import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postURL = 'http://localhost:8081/users/';

  login(email: string, password: string): Promise<any> {
    return this.http.post(`${this.postURL}login`, {
      email,
      password
    }).toPromise().then((res: any) => {
      console.log(res);
      return res;
    }).catch((err: any) => {
      console.log(err);
      return err;
    });
  }
}
