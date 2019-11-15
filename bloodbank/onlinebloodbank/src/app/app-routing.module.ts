import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';

import { PagecusComponent } from './pagecus/pagecus.component';
import { SearchComponent } from './search/search.component';
import { PostreqComponent } from './postreq/postreq.component';
import { DonateComponent } from './donate/donate.component';
import { BookslothomeComponent } from './bookslothome/bookslothome.component';
import { AdminfaqComponent } from './adminfaq/adminfaq.component';
import { CusfaqComponent } from './cusfaq/cusfaq.component';



const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },

  {
    path:"login", component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"custpage",component:PagecusComponent,   canActivate: [AuthGuardService]
  },
  {
    path:"adminfaq",component:AdminfaqComponent,   canActivate: [AuthGuardService]
  },
  {
    path:"cusfaq",component:CusfaqComponent,   canActivate: [AuthGuardService]
  },

  {
    path:"search",component:SearchComponent,  canActivate: [AuthGuardService]
  },
  {
    path:"postreq",component:PostreqComponent,  canActivate: [AuthGuardService]
  },
  {
    path:"donate",component:DonateComponent,  canActivate: [AuthGuardService]
  },
  {
    path:"bookslothome/:id",component:BookslothomeComponent,  canActivate: [AuthGuardService]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 