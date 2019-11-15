import { Component, OnInit } from '@angular/core';
import { Ipostreq } from '../models/Ipostreq.module';
import { BloodService } from '../services/blood.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-postreq',
  templateUrl: './postreq.component.html',
  styleUrls: ['./postreq.component.css']
})
export class PostreqComponent implements OnInit {
  [x: string]: any;
  flag: boolean=false;

  constructor(private bloodservice:BloodService,private route:Router,private _authservice:UserAuthService,private userser:UserService) { }
  activeuser:number=null;
  areas:string[];
  states:string[];
  user:Ipostreq={
bloodGroup:null,
state:null,
area:null,
pin:null,
contact:null

  }
  ngOnInit() {
    {{debugger}}
this.states=this.userser.states;
  }
  postreq(user:Ipostreq)
  {
this.bloodservice.postreq(user).subscribe(() => this.check()); 
 
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
check():void{
  this.flag=true;
}
logOut():void
{
  this._authService.logOut();
  this.router.navigate(['/']);
}

}
