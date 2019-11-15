import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Iuser } from '../models/Iuser.module';
import { Observable } from 'rxjs';

import { Iuserreg } from '../models/Iuserreg.module';
import { AuthGuardService } from './auth-guard.service';
import { Route, Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly Url="http://localhost:28886/api/user";
states:string[]=['Kerala','TamilNadu'];
statesKerala:string[]=['Kochi','Kollam'];
statesTamil:string[]=['PTC','Metukkupam','Shollinganalur','Medavakkam','Tnagar','Tuticorin'];

activeuser:number=null;
activeusername:string=null;
  constructor(private http: HttpClient,private _authService:UserAuthService,private router:Router) { }
  // register the user
 adduser(newuser:Iuser):Observable<{}>
  {
    {{debugger}}
   return this.http.post(this.Url, newuser);
   }
   //After registration,it provides the Id for the user
   dispidafterreg():Observable<Iuser>
   {
     console.log("jk");{{debugger}}
return this.http.get<Iuser>("http://localhost:5749/api/getidafterreg");

   }
   //login validation
   loginuser(userid:number,pass:string)
   {
     {{debugger}}
     return this.http.get<Iuser>(this.Url+'/'+userid+'/'+pass);
   }
   //Unique contact validation
 getContact()
 {
return this.http.get<bigint[]>("http://localhost:28886/api/user/GetContact");
 }
    //Unique email validation
 getEmail()
 {
  return this.http.get<string[]>("http://localhost:28886/api/user/GetEmails");
 }
}
