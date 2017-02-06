import { Component, OnInit } from '@angular/core';
// const TimelineMax = require('gsap').TimelineMax;
// const TweenMax = require('gsap').TweenMax;
// import  "gsap";
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;
import "gsap";
 // import TimelineMax from 'gsap';

// import {TimelineMax} from 'gsap';

@Component({
  selector: 'app-side3',
  templateUrl: './side3.component.html',
  styleUrls: ['./side3.component.css']
})
export class Side3Component implements OnInit {

  constructor() {
// let tl = new TimelineMax;

   }

  ngOnInit() {

  	   let tl = new TimelineMax();
       let h1 = document.getElementById("h1");
       let h2 = document.getElementById("h2");

      tl.set('#h1', {transformOrigin:"0% 0%"}); 
      tl.from(h1, 1, { x: -2010, scale: 0.1, ease: Power4.easeInOut }, 0);
      tl.from(h2, 2, { y: -200, opacity:0, ease:  Power4.easeInOut  }, "-=0.5");
      tl.to(h1, 0.4, {  scale: 2, ease: Power2.easeInOut }, "-=0.1");

       tl.play();
      }

}
