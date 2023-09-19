import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role } from 'src/app/enums/role';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private service: LoginService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      // TODO aq preciso ainda fazer o id da sessao e botar o user id pela session
      sessionId: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      userId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)])
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
  public login() {
    if (this.form.valid) {
      this.service.login(this.form.value.email, this.form.value.password).subscribe((res: any) => {
        localStorage.setItem('user_id', res.user_id);
        if (res.role === Role.ADMIN) {
          localStorage.setItem('user_role', Role.ADMIN);
          window.location.href = 'http://localhost:4200/admin';
        } else {
          localStorage.setItem('user_role', Role.USER);
          window.location.href = 'http://localhost:4200/home';
        }
      });
    }
  }

  
}
