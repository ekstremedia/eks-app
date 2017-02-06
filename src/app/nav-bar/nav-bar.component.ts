import { Component } from '@angular/core';
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;
import "gsap";
// declare var TimelineMax:any;
// const TimelineMax = require('gsap').TimelineMax;

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
 styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

	vis: boolean = true;
    h1 = document.getElementById("h1");

  constructor() {

       console.log("navbnar");
    }

  ngOnInit(){

    // let tl = TimelineMax(); // this is free of errors now

    // tl.play();  



 }
  menyToggle()  {
 	this.vis = !this.vis;
 	if (this.vis) {
 		this.hideMeny();
 	} else {
 		this.showMeny();
 	}
 	console.log("meny toggle"+this.vis);
 }

   hideMeny()  {
    let h1 = document.getElementById("eks-meny");
   	      TweenMax.to(h1, 1, { opacity:0, x:-1000, ease: Power4.easeInOut }, 0);
   }
   showMeny()  {
    let h1 = document.getElementById("eks-meny");
   	      // TweenMax.to(h1, 1, { opacity: 0.9, x:0, ease: Power2.easeInOut }, "-=0.1");
   	      TweenMax.fromTo(h1, .4, { opacity:0, x:-1000, ease: Power4.easeInOut },{ opacity:0.94, x:0, ease: Power4.easeInOut }, "-=0.1");
   }

}