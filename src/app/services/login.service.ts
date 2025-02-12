import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../interfaces/user';

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

  getUserById(userId: Number): Promise<User> {
    return this.http.get(`${this.postURL}get/` + userId).toPromise().then((res:any) => {
      return res;
    }).catch((err: any) =>{
      return err;
    });
  }
}
