import { Injectable } from '@angular/core';
import { Role } from '../enums/role';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * Aqui vai fazer a validação do usuario para pegar a role dele
   * @returns Role
   */
  getUserRole(): Role {
    this.http.get('http://localhost:8081/role').subscribe((res: any) => {
      localStorage.setItem('role', res.role);
      return res.role == 'ADMIN' ? Role.ADMIN : Role.USER;
    });
    return Role.USER;
  }
}
