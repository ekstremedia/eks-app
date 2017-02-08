import { Component, OnInit } from '@angular/core';
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;
import "gsap";

@Component({
  selector: 'app-side3',
  templateUrl: './side3.component.html',
  styleUrls: ['./side3.component.css']
})
export class Side3Component implements OnInit {

  constructor() {

   }

  ngOnInit() {

  	   let tl = new TimelineMax();
       let h1 = document.getElementById("h1");
       let h2 = document.getElementById("h2");
       let h3 = document.getElementById("h3");

      tl.set('#h1', {transformOrigin:"0% 0%"}); 
      tl.from(h1, 1, { autoAlpha: 0, x: -200,  ease: Power4.easeInOut }, 0);
      tl.from(h2, 1, { autoAlpha: 0, y: -200, opacity:0, ease:  Power4.easeInOut  }, 0);
      tl.from(h3, 1, { autoAlpha: 0, x: 200, opacity:0, ease:  Power4.easeInOut  }, 0);
      // tl.to(h1, 0.4, {  scale: 2, ease: Power2.easeInOut }, "-=0.1");

       tl.play();
      }

}
