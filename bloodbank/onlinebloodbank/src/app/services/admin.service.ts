import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifaq } from '../models/Ifaq.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly Urls='http://localhost:31416/api/faq';

  constructor(private http: HttpClient) { }
//Displays the faq with answer in customer faq page
  displaycustomer():Observable<Ifaq[]>
  {
    {{debugger}}
return this.http.get<Ifaq[]>("http://localhost:31416/api/getall");
  }
//Displays the faq that are to be answered in Admin page
  displayadmin():Observable<Ifaq[]>
  {
    {{debugger}}
return this.http.get<Ifaq[]>(this.Urls);
  }
  //Admin updates the faq with answers
 onsubmit(faqform:Ifaq)
 {
   {{debugger}}
return this.http.put('http://localhost:31416/api/faq/' +faqform.id+'/'+faqform.answers,{headers: new HttpHeaders({ 'Content-Type': 'application/json'})} );
 }
 //User enters a new question
 addques(uid:number,postques:string)
 {
   {{debugger}}
return this.http.post('http://localhost:31416/api/faq/'+uid+'/'+postques,{headers: new HttpHeaders({ 'Content-Type': 'application/json'})} );
 }
}
