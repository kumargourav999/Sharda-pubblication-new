import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

constructor(private router: Router){
   this.admin = localStorage.getItem('adminToken');
}
admin:any;
 ngOnInit() {
    this.loadRole();

    // 👇 This handles updates when localStorage changes (same tab manual refresh workaround)
     window.addEventListener('roleChanged', () => {
      this.loadRole();
    });
  }
loadRole(){
     this.admin = localStorage.getItem('adminToken');
  }
 menuOpen = false;
menuOpenService=false;
  toggleMenu() {
   
    this.menuOpen = !this.menuOpen;
  }
   toggleMenuService() {
    this.menuOpenService = !this.menuOpenService;
  }
  serviceOpen = false;

toggleDropdown(event:any){
  event.stopPropagation(); // prevent closing
  this.serviceOpen = !this.serviceOpen;
}
nav(){
 this.router.navigate(["research-pubication"]);
}
closeAll(){
  this.serviceOpen = false;
  this.menuOpen = false; // close hamburger also
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
