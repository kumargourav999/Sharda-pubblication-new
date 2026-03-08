import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private router: Router){}
 menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
goToContact(){
  this.router.navigate(['/contact']);
}

sendEmail(){
  window.location.href = "mailto:info@shardapublication.com";
}

makeCall(){
  window.location.href = "tel:+919999999999";
}
}
