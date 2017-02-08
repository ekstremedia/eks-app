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
      let x1,x2,x3;
      x1 = Math.floor((Math.random() * 300) + -300);
      x2 = Math.floor((Math.random() * 300) + -300);
      x3 = Math.floor((Math.random() * 300) + -300);
      let t1 = Math.floor((Math.random() * 0) + 1);
      let t2 = Math.floor((Math.random() * 0) + 1);
      let t3 = Math.floor((Math.random() * 0) + 1);
      let tt1 = Math.floor((Math.random() * 0) + 9);
      let tt2 = Math.floor((Math.random() * 0) + 9);
      let tt3 = Math.floor((Math.random() * 0) + 9);   
      let ut1 = t1+"."+tt1; 
      let ut2 = t1+"."+tt1; 
      let ut3 = t1+"."+tt1; 
      tl.from(h1, ut1, { autoAlpha: 0, x: x1, ease: Power4.easeInOut }, 0);
      tl.from(h2, ut2, { autoAlpha: 0, y: x2, ease:  Power4.easeInOut  }, 0);
      tl.from(h3, ut3, { autoAlpha: 0, x: x3, ease:  Power4.easeInOut  }, 0);
      // tl.to(h1, 0.4, {  scale: 2, ease: Power2.easeInOut }, "-=0.1");

       tl.play();
      }

}
