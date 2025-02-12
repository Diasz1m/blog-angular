import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user!: User;
  constructor(private Service: LoginService) {
    this.getUser();
  }


  getUser() {
    const res = this.Service.getUserById(Number(localStorage.getItem('user_id')));
    res.then((res: any) => {
      this.user = res;
      console.log(this.user);
    });
  }

}
