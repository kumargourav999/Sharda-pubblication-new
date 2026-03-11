import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JournalServiceService {

    baseUrl="https://sharda-pubblication-new-2.onrender.com/api"
  // private baseUrl = "http://localhost:5000/api";

  constructor(private http: HttpClient) {}

  // ADMIN LOGIN
  adminLogin(data:any): Observable<any>{
    return this.http.post(this.baseUrl + "/admin/login", data);
  }

  // ADD JOURNAL
  addJournal(data:any): Observable<any>{
    return this.http.post(this.baseUrl + "/journals/addJournal", data);
  }

  // GET JOURNALS
  getJournals(): Observable<any>{
    return this.http.get(this.baseUrl + "/journals/getJournals");
  }
   deleteJournal(id:any):Observable<any>{
  return this.http.delete(this.baseUrl+"/journals/deleteJournal/"+id);
 }

 // UPDATE
 updateJournal(id:any,data:any):Observable<any>{
  return this.http.put(this.baseUrl+"/journals/updateJournal/"+id,data);
 }
}
