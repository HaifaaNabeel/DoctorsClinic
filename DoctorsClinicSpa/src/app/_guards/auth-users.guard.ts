import { Injectable } from '@angular/core';
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersGuard implements CanActivate {
  /**
   *
   */
  constructor(private authService:AuthService,private route:Router) {}
 
  canActivate(
    //next: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot
    ): //Observable<boolean> | Promise<boolean> | 
    boolean {
      if(this.authService.loggedIn())
      {
        return true;
      }
    //
    this.route.navigate(["/Home"]);
    console.log('login first');
    return false;
  }
}
