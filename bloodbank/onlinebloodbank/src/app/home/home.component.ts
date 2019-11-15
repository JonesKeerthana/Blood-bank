import { Component, OnInit } from '@angular/core';
import { Iblood } from '../models/Iblood.module';
import { BloodService } from '../services/blood.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bloodservice:BloodService) { }
filteredItems:Observable<Iblood[]>;
  ngOnInit() {
    {{debugger}}
   this.filteredItems=this.bloodservice.postreqhome();
   console.log(this.filteredItems);
  }

}
