import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodService } from '../services/blood.service';
import { UserAuthService } from '../services/user-auth.service';
import { Observable } from 'rxjs';
import { Iblood } from '../models/Iblood.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pagecus',
  templateUrl: './pagecus.component.html',
  styleUrls: ['./pagecus.component.css']
})
export class PagecusComponent implements OnInit {


  constructor(private bloodservice:BloodService,private router:Router,private _authService:UserAuthService,private userservice:UserService) { }
  filteredItems:Observable<Iblood[]>;
name:string;
  ngOnInit() {
    this.filteredItems=this.bloodservice.postreqhome();
    console.log(this.filteredItems);
    this.name=this.userservice.activeusername;
  }
  logOut():void
  {
    this._authService.logOut();
    this.router.navigate(['/']);
  }
 }
