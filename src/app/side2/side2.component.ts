import { Component, OnInit } from '@angular/core';
// const TimelineMax = require('gsap').TimelineMax;
// const TweenMax = require('gsap').TweenMax;
// import  "gsap";
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;
import "gsap";
 // import TimelineMax from 'gsap';

// import {TimelineMax} from 'gsap';

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
  	   let p2tl = new TimelineMax();
       let h1 = document.getElementsByClassName("h1");
       let h2 = document.getElementById("h2");
	  p2tl.repeat(-1);
	  p2tl.repeatDelay(1);	  
      // tl.set('#h1', {transformOrigin:"0% 0%"}); 
      tl.from(h1, 1, { x: -2010, scale: 0.1, ease: Power4.easeInOut }, 0);
      tl.from(h2, 2, { y: -210, opacity: 0, ease: Bounce.easeOut }, "-=0.5");
      p2tl.to(h1, 0.6, {  x: 250, ease: Power4.easeInOut }, "+=2");
      p2tl.to(h1, 0.6, {  x: 0, ease: Power4.easeInOut }, "+=2");
      p2tl.to(h1, 0.6, {  x: 420, ease: Power4.easeInOut }, "+=2");
      p2tl.to(h1, 0.6, {  x: 30, ease: Power4.easeInOut }, "+=2");
      p2tl.to(h1, 0.6, {  x: 0, ease: Power4.easeInOut }, "+=2");

       tl.play();
       p2tl.play();
      }

}
