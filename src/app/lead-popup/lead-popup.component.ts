import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-popup',
  templateUrl: './lead-popup.component.html',
  styleUrls: ['./lead-popup.component.css']
})
export class LeadPopupComponent implements OnInit {

  showPopup = false;

  form = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  ngOnInit() {

    const popupShown = localStorage.getItem('leadPopupShown');

    if (!popupShown) {

      setTimeout(() => {
        this.showPopup = true;
      }, 2000);

    }

  }

  submitForm() {

    // mark popup as shown
    localStorage.setItem('leadPopupShown', 'true');

    this.showPopup = false;
  }

  closePopup(){

    localStorage.setItem('leadPopupShown', 'true');

    this.showPopup = false;
  }

}