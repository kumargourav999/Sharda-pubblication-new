import { Component } from '@angular/core';
import { JournalServiceService } from '../service/journal-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  constructor(private service:JournalServiceService){}
contactForm = {
    reason: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  };
submitQuery(){

  this.service.submitQuery(this.contactForm)
  .subscribe(res=>{

    alert("Query submitted successfully");
     this.contactForm = {
      reason: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    };
}
);


  



  }

}