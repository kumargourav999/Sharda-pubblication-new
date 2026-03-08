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

  ngOnInit() {

    const visited = false;

    if (visited) {
      this.showPopup = false;
    }

  }

  submitForm() {

    console.log(this.form);

    localStorage.setItem('popupShown', 'true');

    this.showPopup = false;
  }

  closePopup(){
    this.showPopup = false;
  }

}
