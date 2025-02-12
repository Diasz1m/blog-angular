import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/enums/role';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private service: LoginService, private Http: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      // TODO aq preciso ainda fazer o id da sessao e botar o user id pela session
      // sessionId: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      // userId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)])
    });
  }

  ngOnInit() {
    

  }

  /**
   * Aqui vai fazer o login ate validar o usuario 
   * Se o usuario for admin vai para a pagina de admin
   * 
   * @Params Usuario, senha
   * @return Role
   */
  public async login() {
    if (this.form.valid) {
      const res: any = await this.service.login(this.form.value.email, this.form.value.password)
      
      if(res)
      {
        console.table(res);
        localStorage.setItem('user_id', res.userId);
        if (res.token == 'ADMIN') {
          localStorage.setItem('user_role', 'ADMIN');
          this.Http.navigate(['/admin']);

          
        } else {
          localStorage.setItem('user_role', 'USER');
          window.location.href = 'http://localhost:4200/home';
          this.Http.navigate(['/home']);

        }
      }
    }
  }

  
}
