import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AdminfaqComponent } from '../adminfaq/adminfaq.component';
import { AdminService } from '../services/admin.service';
import { Ifaq } from '../models/Ifaq.interface';
import { Observable } from 'rxjs';
import { ResourceLoader } from '@angular/compiler';
import { ROUTER_INITIALIZER, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-cusfaq',
  templateUrl: './cusfaq.component.html',
  styleUrls: ['./cusfaq.component.css']
})
export class CusfaqComponent implements OnInit {

  constructor(private userservice:UserService,private adminservice:AdminService,private authservice:UserAuthService,private router:Router) { }
uid:number;
faq:Observable<Ifaq[]>;
faqform:Ifaq={
id:null,
userId:null,
answers:null,
questions:null
};
msg:string="";
check:boolean=true;
  ngOnInit() {
    this.faq= this.adminservice.displaycustomer();
  }
  onSubmit(faqform:Ifaq)
  {
    {{debugger}}
    this.uid=this.userservice.activeuser;
  this.adminservice.addques(this.uid,faqform.questions).subscribe(()=> 
  {
    
    
    if(this.check==false)
    {
      this.msg="Question added successfully"
    }
    else
  {
    this.msg="";
  }
  this.faq= this.adminservice.displaycustomer()
  });
  }
  reinit():void{
    this.faqform={
      id:null,
      userId:null,
      answers:null,
      questions:null
      };
      this.check=false;
  }
  logOut():void
  {
    this.authservice.logOut();
    this.router.navigate(['/']);
  }
}
