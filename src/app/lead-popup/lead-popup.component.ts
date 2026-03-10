import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-lead-popup',
  templateUrl: './lead-popup.component.html',
  styleUrls: ['./lead-popup.component.css']
})
export class LeadPopupComponent implements OnInit {
 showPopup = true;

  form = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };



  submitForm() {

    

    this.showPopup = false;
  }




ngOnInit() {

setTimeout(() => {
  this.showPopup = true;
}, 2000);

}

closePopup(){
this.showPopup = false;
}

}
