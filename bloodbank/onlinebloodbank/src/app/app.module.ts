import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PagecusComponent } from './pagecus/pagecus.component';
import { SearchComponent } from './search/search.component';
import { PostreqComponent } from './postreq/postreq.component';
import { DonateComponent } from './donate/donate.component';
import { BookslothomeComponent } from './bookslothome/bookslothome.component';
import { AdminfaqComponent } from './adminfaq/adminfaq.component';
import { CusfaqComponent } from './cusfaq/cusfaq.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PagecusComponent,
    SearchComponent,
    PostreqComponent,
    DonateComponent,
    BookslothomeComponent,
    AdminfaqComponent,
    CusfaqComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  FormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
