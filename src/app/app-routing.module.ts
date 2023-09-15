import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { EscreverPostComponent } from './components/escrever-post/escrever-post.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HasRoleGuard } from './has-role.guard';
import { Role } from './enums/role';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => HomeModule},
  {
    path: 'Sobre', component: SobreMimComponent,
  },
  {
    path: 'Escrever', component: EscreverPostComponent,
    canActivate: [HasRoleGuard],
    data: {roles: [Role.ADMIN]}
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'unauthorized', component: LoginComponent
  },
  {
    path: 'post', component: PostComponent,
    canActivate: [HasRoleGuard],
    data: {roles: [Role.USER]}
  },
  {
    path: '**', component: LoginComponent
  },
  {path: 'admin',
  component: AdminComponent,
  canActivate: [HasRoleGuard],
  data: {roles: [Role.ADMIN]}
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
