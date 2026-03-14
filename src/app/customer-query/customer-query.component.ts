import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../service/journal-service.service';

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.css']
})
export class CustomerQueryComponent implements OnInit {

  queries:any[] = [];

  constructor(private service:JournalServiceService){}

  ngOnInit(){
    this.getQueries();
  }

  getQueries(){
    this.service.getCustomerQueries().subscribe((res:any)=>{
      this.queries = res;
    });
  
}
}