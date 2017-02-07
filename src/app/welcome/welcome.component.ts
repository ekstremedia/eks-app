import { Component, OnInit } from '@angular/core';
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;
import "gsap";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	
  	   let tl = new TimelineMax();
       let h1 = document.getElementById("h1");
       let h2 = document.getElementById("h2");

      // tl.set('#h1', {transformOrigin:"0% 0%"}); 
       tl.from(h1, 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, 0.4);
       tl.from(h2, 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "-=1");
      // tl.from(h2, 1, { y: -200, opacity:0, ease:  Power4.easeInOut  }, "-=0.5");
      // tl.to(h1, 0.4, { ease: Power2.easeInOut }, "-=0.5");
      // tl.to(h1, 0.4, { rotationY:360,transformOrigin:" -1%" }, "+=0.5");
      // tl.to(h2, 1, { y:100, scale: 2, ease:  Power4.easeInOut  }, "+=0.5");
      // tl.to(h2, 1, { rotateY:360, ease:  Power4.easeInOut  }, "+=0.5");
      // tl.to(h1,0.2,{css: { textTransform: "capitalize"}},"-=.1");

       // tl.play();  	

  }

}
