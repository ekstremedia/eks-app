import { Component } from '@angular/core';
// declare var TimelineMax:any;
// const TimelineMax = require('gsap').TimelineMax;

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  // styleUrls: ['./app.component.css']
})
export class NavBarComponent {
  constructor() {

       console.log("navbnar");
    }
  ngOnInit(){

    // let tl = TimelineMax(); // this is free of errors now

    // tl.play();  
 }
}