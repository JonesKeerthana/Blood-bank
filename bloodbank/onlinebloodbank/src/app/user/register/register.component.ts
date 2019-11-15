import { Component, OnInit } from '@angular/core';
import { Iuser} from '../../models/Iuser.module';

import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { Iuserreg } from '../../models/Iuserreg.module';
import { Istate } from 'src/app/models/Istate.module';
import { Iarea } from 'src/app/models/Iarea.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  useremail:string;
  usercontact:bigint;
  contacts:bigint[];
  emails:string[];

 newuser:Iuserreg;
currentuserid:number;
flag:boolean=false;
userdetails:Iuser;
areas:string[];
states:string[];
user:Iuserreg={

  firstName:null,
  lastName:null,
  age:null,
  gender:null,
  email:null,
  contact:null,
  pass:null,
  weight:null,
  state:null,
  area:null,
  pinCode:null,
  bloodGroup:null,

}
 



constructor(private _authService:AuthGuardService,private router:Router,private route:ActivatedRoute,private userservice:UserService) {
}
  ngOnInit() {
    {{debugger}}
    this.states=this.userservice.states;
    this.userdetails=null;
    this.userservice.getEmail().subscribe(result=>{this.emails=result as string[],console.log(this.emails),this.getContacts()} )
  }
  getContacts()
  {
  this.userservice.getContact().subscribe(result=>{this.contacts=result as bigint[],console.log("hi"+this.contacts)} )
  
  }
  

 Unique(email:string):boolean
 {
   if(email==" ")
   {
     return false;
   }
   this.useremail=this.emails.find(x=>x==email);
   if(this.useremail==undefined)
   {
     return false;
   }
   else 
   {
     return true;
   }
 }
  

 UniqueContact(contact:bigint):boolean
 {
   if(contact==undefined)
   {
     return false;
   }
   this.usercontact=this.contacts.find(x=>x==contact);
   if(this.usercontact==undefined)
   {
     return false;
   }
   else 
   {
     return true;
   }
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
     this.areas=this.userservice.statesKerala;
   }
   else if(state=='TamilNadu')
   {
     this.areas=this.userservice.statesTamil;
   }
 }
 

register(newuser:Iuserreg)
 {
{{debugger}}
  this.userservice.adduser(newuser).subscribe(()=>
  {
    {{debugger}}
    this.dispid();
  });
 
}

dispid()
{
  {{debugger}}
  console.log("hi");
 this.userservice.dispidafterreg().subscribe(x=>{this.userdetails=x as Iuser});
  console.log(this.userdetails);
  this.flag=true;
}

}
