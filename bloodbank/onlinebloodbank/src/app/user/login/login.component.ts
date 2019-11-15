import { Component, OnInit, ɵConsole } from '@angular/core';

import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';
import { Iuser } from '../../models/Iuser.module';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _authService: UserAuthService, private _router: Router,private userservice:UserService) { }

  ngOnInit() {
  }
user:Iuser;
msg:string;
  onSubmit(userid:number,password:string)
  {
    {{debugger}}
    
    this.userservice.loginuser(userid,password).subscribe((x:Iuser)=>{
      this.user=x;
      if(this.user==null)
    {
     this.msg="Incorrect UserId or Password"
   }
 else{
   this.msg="";
 }
   if(this.user.role=="admin" )
   {
     this._authService.logIn();
     this.userservice.activeuser=1;
     this.userservice.activeusername=this.user.firstName;
     console.log(this.userservice.activeuser);
         this._router.navigate(['adminfaq']);
        console.log(this.user.role);
   }
   else if(this.user.role=="User")
   {this._authService.logIn();
     this.userservice.activeuser=this.user.userId;
     this.userservice.activeusername=this.user.firstName;
     console.log(this.userservice.activeuser);
         this._router.navigate(['custpage']);
        console.log(this.user.role);
   }

 } );

} 
   
  }


