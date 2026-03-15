import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public router:Router){}
  @ViewChild('homeVideo') video!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.video.nativeElement.play();
  }
  onClickSublitArticle(){
    this.router.navigate(["/submitArticle"]);
  }

}