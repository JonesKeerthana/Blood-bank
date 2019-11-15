import { Injectable } from '@angular/core';

import { Iblood } from '../models/Iblood.module';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Idonorblood } from '../models/Idonorblood.module';
import { Islot } from 'src/Islot.interface';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  readonly Urls="http://localhost:4015/api";

  constructor(private http: HttpClient,private userservice:UserService) { }
  id:number=this.userservice.activeuser;
  blood:Idonorblood;
  //Admin views all the blood details and status
  getblooddetails()
  {{{debugger}}
    return this.http.get<Iblood[]>('http://localhost:4015/api/donateblood');
  }
  //Checks  slot availability
  checkslot(slotdetails:Islot)
  {
    {{debugger}}
    console.log("checked slot")
return this.http.post(this.Urls+'/'+'slot',slotdetails);
  }
  //Donate blood
donateblood()
{
  {{debugger}}
  return this.http.post(this.Urls+'/'+'donateblood'+'/'+this.id, this.blood);
}
//To book slot
bookslot(slotdetails:Islot)
{
  {{debugger}}
  return this.http.post(this.Urls+'/'+'slot'+'/'+this.id, slotdetails)
}
//Update the status of blood requirement to done
delete(sid:number)
{
  {{debugger}}
  return this.http.put("http://localhost:4015/api/donateblood"+"/"+sid,{headers: new HttpHeaders({ 'Content-Type': 'application/json'})} );
}
}
