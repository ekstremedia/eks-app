import { Component, OnInit } from '@angular/core';
const TimelineMax = require('gsap').TimelineMax;
@Component({
  selector: 'app-side2',
  templateUrl: './side2.component.html',
  styleUrls: ['./side2.component.css']
})
export class Side2Component implements OnInit {

  constructor() {
// let tl = new TimelineMax;

   }

  ngOnInit() {
  	       let tl = new TimelineMax();
       let h1 = document.getElementById("h1");
      tl.from(h1, 1, { x: -200, scale: 0.1 }, 0);

       tl.play();
  }

}
