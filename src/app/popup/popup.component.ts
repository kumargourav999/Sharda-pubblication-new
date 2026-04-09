import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  @Input() message: string = '';
  @Input() type: string = 'success'; // success | error

  visible: boolean = false;

  show(msg: string, type: string = 'success') {
    this.message = msg;
    this.type = type;
    this.visible = true;

    setTimeout(() => {
      this.visible = false;
    }, 3000);
  }

  close() {
    this.visible = false;
  }
}