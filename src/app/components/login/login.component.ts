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
      password: new FormControl('', Validators.required)
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
        if (res.role === Role.ADMIN) {
          window.location.href = 'http://localhost:4200/admin';
        } else {
          window.location.href = 'http://localhost:4200/home';
        }
      }
    }
  }

}
