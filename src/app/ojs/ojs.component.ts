import { Component } from '@angular/core';

@Component({
  selector: 'app-ojs',
  templateUrl: './ojs.component.html',
  styleUrls: ['./ojs.component.css']
})
export class OJSComponent {
faqOpen:boolean[] = [false,false,false,false,false];

toggleFAQ(index:number){
  this.faqOpen[index] = !this.faqOpen[index];
}
}
