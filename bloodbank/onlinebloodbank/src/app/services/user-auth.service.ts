import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
loggedIn=false;
logIn()
{
  this.loggedIn=true;
}
logOut()
{
  this.loggedIn=false;
}
  constructor() { }
}
