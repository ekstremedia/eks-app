import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

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

  publicRoutes: any;
  private parentRouter: Router;
	vis: boolean;
	// parentRouter = this.parentRouter;
	// console.log(parentRouter);
  constructor() {


    }

  ngOnInit(){
 }


   menuGo(url) {
   	  // parentRouter 
   }
   hideMeny()  {
	let eks = document.getElementById("eks-meny");
	let ball = document.getElementById("ball");
	//this.cFlipBtn(ball);
		this.flipBtn(ball);
		TweenMax.fromTo(eks, .6,
		{ opacity:1, x:0 }, 
		{ opacity:0, x:-2420 , ease: Power2.easeInOut});
		this.setNeg();

   }
   hideMenyIf()  {
   	if (this.vis) {
    	let eks = document.getElementById("eks-meny");
		let ball = document.getElementById("ball");
    	//this.cFlipBtn(ball);
			this.flipBtn(ball);
			TweenMax.fromTo(eks, .6,
			{ opacity:1, x:0 }, 
			{ opacity:0, x:-2420 , ease: Power2.easeInOut});
			this.setNeg();
		}
   }   
   showMeny()  {
   			// let tl = new TimelineMax();
		    let eks = document.getElementById("eks-meny");
		    let ball = document.getElementById("ball");
			this.flipBtn(ball);
			// tl.play();
			TweenMax.fromTo(eks, 1, 
				{ opacity:0, x:-2420, ease: Power2.easeIn },
				{ opacity:1, x:0, ease: Elastic.easeOut.config(0.6, 0.7)});
			this.setPos();
  	
	}

	flipBtn(cobj) {
			TweenMax.to(cobj, .6, { rotationY:360, ease: Power4.easeOut,onComplete:resetRotation} );
			function resetRotation()
			{
			    TweenMax.set(cobj, {rotationY:0});
			}		
	}
	cFlipBtn(ovbj) {
			TweenMax.to(ovbj, .4, { rotationY:360, ease: Power4.easeOut,onComplete:resetRotation} );
			function resetRotation()
			{
			    TweenMax.set(ovbj, {rotationY:0});
			}		
	}	
	 setNeg() {
		this.vis = false;
	}
	 setPos() {
		this.vis = true;
	}	

	menyToggle()  {
		this.vis = !this.vis;
	 	if (this.vis) {
	 		this.showMeny();
	 	} 
	 	if (!this.vis) {
	 		this.hideMeny();
	 	}
	}

}