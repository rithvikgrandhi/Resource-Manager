import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: ApiCallService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const requiredRoles = next.data['role']; // Allow multiple roles
console.log(requiredRoles)
    return combineLatest([
      this.authService.isLoggedIn$,
      this.authService.getRole(),
    ]).pipe(
      map(([isLoggedIn, userRole]) => {
        if (isLoggedIn && requiredRoles.includes(userRole)) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }
}
