import { Injectable } from '@angular/core';
import { Role } from '../enums/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserRole() {
    /*
      Chamada fake para api
    */ 
    return Role.ADMIN;
    
    //return localStorage.getItem('role');
  }
}
