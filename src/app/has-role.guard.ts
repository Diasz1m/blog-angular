import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from './enums/role';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const router: Router = inject(Router);
    const userRole: Role = inject(AuthService).getUserRole();

    const expectedRoles: Role[] = route.data['roles'];

    const hasRole: boolean = expectedRoles.some((role) => userRole === role);
    console.log(hasRole);

    //Vai retornar a role do usuario ou a rota de acesso negado
    return hasRole || router.parseUrl('/login');
  }
}
