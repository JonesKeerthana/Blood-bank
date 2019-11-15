import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iblood } from '../models/Iblood.module';
import { Observable } from 'rxjs';
import { Iblooduser } from '../models/Iblooduser.module';
import { Ipostreq } from '../models/Ipostreq.module';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BloodService {
  readonly Urls="http://localhost:30653/api/search";
  activeusername:string=null;
  constructor(private http: HttpClient,private userservice:UserService) { }
//To display the blood requirements in home page
postreqhome():Observable<Iblood[]>
{{{debugger}}
  return this.http.get<Iblood[]>(this.Urls);
}
//Search for the blood and displays the userdetailsalong with blood details 
search(blooddetails:Iblooduser):Observable<Iblooduser[]>
{
  {{debugger}}
  return this.http.get<Iblooduser[]>(this.Urls+"/"+blooddetails.bloodGroup+"/"+blooddetails.state+"/"+blooddetails.area+"/"+blooddetails.pinCode);
}
//Post the blood requirements in case of no blood availability
postreq(user:Ipostreq):Observable<{}>
{
return this.http.post(this.Urls+"/"+this.userservice.activeuser,user);
}
}
