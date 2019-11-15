import { Component, OnInit } from '@angular/core';
import { Iblood } from '../models/Iblood.module';
import { DonateService } from '../services/donate.service';
import { Idonorblood } from '../models/Idonorblood.module';
import { Islot } from 'src/Islot.interface';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
 
  constructor(private donateservice:DonateService,private userser:UserService,private authservice:UserAuthService,private router:Router) { 
    }
    areas:string[];
    states:string[];
flag:boolean=false;
check:boolean=false;
success:boolean=false;
msg1:string;
  ngOnInit() {
    this.states=this.userser.states;
  }
  avail:Islot;
  slotdetails:Islot={
    userId:null,
    hospital:null,
    city:null,
    dateForDonating:null,
    timeForDonating:null
  };
  blooddetails:Idonorblood={
    bloodGroup:null,
    state:null,
    area:null,
    pinCode:null,
    contact:null,
    status:null
  }
  maxDate:string='2020-05-11'
  checkdate(dateForDonating:string)
  {
    debugger
  if(dateForDonating==undefined)
  {
    return false;
  }
  else if(dateForDonating.localeCompare('2019-11-14')<1)
  {
    return true;
  }
  else if(this.maxDate.localeCompare(dateForDonating)<1)
  {
    return true;
  }
  else 
  {
    return false;
  }

  }
  
  onSubmit(blooddetails:Idonorblood)
  {
    {{debugger}}
    this.donateservice.blood=blooddetails;
    this.flag=true;
  
  }
  logOut():void
  {
    this.authservice.logOut();
    this.router.navigate(['/']);
  }
  onSubmitslot(slotdetails:Islot)
  {

    {{debugger}}
    this.success=true;
    this.donateservice.checkslot(slotdetails).subscribe((x:Islot)=>{
      {{debugger}}
      this.avail=x;
  
    if(this.avail!=null)
    {

      this.check=true;
      this.msg1="Sorry,Please try a different slot.";
      
       }
       else
       {
        this.check=false;
        this.donateservice.bookslot(slotdetails).subscribe(()=>
        {
          this.donateservice.donateblood().subscribe()
          this.msg1="Slot booked successfully .You are going to save a life p:)";
         
        });
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
