import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iblood } from '../models/Iblood.module';
import { Iblooduser } from '../models/Iblooduser.module';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { BloodService } from '../services/blood.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private bloodservice:BloodService,private _authService:UserAuthService,private router:Router,private userser:UserService) { }
  filteredItems:Observable<Iblood[]>;
  searchitems:Iblooduser[]=null;
  msg:string;
  areas:string[];
  states:string[];
  flag:boolean=false;
  blooddetails:Iblooduser={
    userId:null,
    firstName:null,
    lastName:null,
    contact:null,
    bloodGroup:null,
    state:null,
    area:null,
    pinCode:null
  }
  ngOnInit() {
    {{debugger}}
this.states=this.userser.states;
  }
  logOut():void
  {
    this._authService.logOut();
    this.router.navigate(['/']);
  }
  onSubmit(blooddetails:Iblooduser)
  {
    {{debugger}}
this.bloodservice.search(blooddetails).subscribe((x:Iblooduser[])=>
{debugger
  this.searchitems=x;
  console.log(this.searchitems);
  if(this.searchitems.length==0)
  {
   this.msg="No blood availability.."
  }
  // if(this.searchitems!=null)
  else{
    this.flag=true;
  this.msg="";
   }
  
  });
  }
  AssignArea(state:string)
 {
   {{debugger}}
   if(state=="")
   {
     this.areas=[]
   }
   else if(state=='Kerala')
   {
     this.areas=this.userser.statesKerala;
   }
   else if(state=='TamilNadu')
   {
     this.areas=this.userser.statesTamil;
   }
 }
}
