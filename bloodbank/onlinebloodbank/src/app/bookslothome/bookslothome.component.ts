import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Islot } from 'src/Islot.interface';
import { DonateService } from '../services/donate.service';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-bookslothome',
  templateUrl: './bookslothome.component.html',
  styleUrls: ['./bookslothome.component.css']
})
export class BookslothomeComponent implements OnInit {

  constructor(private aroute:ActivatedRoute,private donateservice:DonateService,private userser:UserService,private authservice:UserAuthService,private router:Router) { }
  check:boolean=false;
success:boolean=false;
sid :number;
  slotdetails:Islot={
    userId:null,
    hospital:null,
    city:null,
    dateForDonating:null,
    timeForDonating:null
  };
  avail:Islot;
  msg1:string;
  ngOnInit() {
  this.sid = +this.aroute.snapshot.paramMap.get('id');
   console.log(this.sid);

  }
  logOut():void
  {
    this.authservice.logOut();
    this.router.navigate(['/']);
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
          {{debugger}}
          this.donateservice.delete(this.sid).subscribe();
          this.msg1="Slot booked successfully .You are going to save a life p:)";
         
        });
       }
      });
   

  }
}
