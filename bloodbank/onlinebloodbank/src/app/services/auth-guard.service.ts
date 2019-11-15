import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isLoggedIn = false;
    
  constructor(private _router : Router, private _authService :UserAuthService){
  }

  canActivate(route: ActivatedRouteSnapshot): boolean{        
      this.isLoggedIn = this._authService.loggedIn;
      console.log("isLoggedIn: " + this.isLoggedIn);
      if(this.isLoggedIn){
          return true;
      }
      else{
          this._router.navigate(['login']);
          return false;
      }        
  }
}
