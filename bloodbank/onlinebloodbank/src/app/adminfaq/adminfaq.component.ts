import { Component, OnInit } from '@angular/core';
import { Ifaq } from '../models/Ifaq.interface';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { BloodService } from '../services/blood.service';
import { DonateService } from '../services/donate.service';
import { Iblood } from '../models/Iblood.module';

@Component({
  selector: 'app-adminfaq',
  templateUrl: './adminfaq.component.html',
  styleUrls: ['./adminfaq.component.css']
})
export class AdminfaqComponent implements OnInit {

  constructor(private donateservice:DonateService,private adminservice:AdminService,private userservice:UserService,private authservice:UserAuthService,private router:Router) { }
  faq:Ifaq[];
  blood:Iblood[];
  faqform:Ifaq={
    id:null,
    userId:null,
    questions:null,
    answers:null
  };
  logOut():void
  {
    this.authservice.logOut();
    this.router.navigate(['/']);
  }
  msg:string="";
  check:boolean=true;
  ngOnInit() {
    this.donateservice.getblooddetails().subscribe(x=>{
      this.blood=x as Iblood[]
      this.adminservice.displayadmin().subscribe(x=>{this.faq=x as Ifaq[]});
    });
 
   console.log(this.faq);

  }
  onSubmit(faqform:Ifaq)
  {
    {{debugger}}
    this.adminservice.onsubmit(faqform).subscribe(()=> 
    {
     this.reload();
    
      if(this.check==false)
      {
        this.msg="Answer added successfully"
      }
      else
    {
      this.msg="";
    }
     this.adminservice.displayadmin().subscribe(x=>{this.faq=x as Ifaq[]});
     
    });
  
  }
  reload():void
  {
    this.faqform={
      id:null,
      userId:null,
      questions:null,
      answers:null
    };
    this.check=false;  
  }
}
