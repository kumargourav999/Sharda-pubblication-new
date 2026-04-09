import { Component } from '@angular/core';
import { JournalServiceService } from '../service/journal-service.service';
import { ViewChild } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 @ViewChild('popup') popup!: PopupComponent;
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
   this.popup.show("Your query submitted successfully. Our team will be connecting shortly", "success");
   
     this.contactForm = {
      reason: '',
      name: '',
      email: '',
      phone: '',
      message: ''
  };
},
err=>{
  this.popup.show("Something went wrong", "error");
}
);


  



  }

}