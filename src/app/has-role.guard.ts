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
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {


  constructor(private router: Router,
    private service: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // const router: Router = inject(Router);
    const userRole: Role = this.service.getUserRole();

    const expectedRoles: Role[] = route.data['roles'];

    const hasRole: boolean = expectedRoles.some((role) => userRole === role);
      
    return hasRole || this.router.parseUrl('/login');
  }
}
