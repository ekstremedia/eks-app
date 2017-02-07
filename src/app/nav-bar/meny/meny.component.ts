import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;
import "gsap";
this.parentRouter = Router;
// this.parentRouter.navigateByUrl('/login');
import { NavBarComponent } from './../nav-bar.component';

@Component({
  selector: 'nav-meny',
  templateUrl: './meny.component.html',
  styleUrls: ['./meny.component.css']
})
export class MenyComponent {
  constructor() {

       console.log("meny comp");
    }
  ngOnInit(){

    // let tl = TimelineMax(); // this is free of errors now

    // tl.play();  
 }

    hideMeny()  {
    let h1 = document.getElementById("eks-meny");
    NavBarComponent
	TweenMax.fromTo(h1, .2,
		{ opacity:1, x:0 }, 
		{ opacity:0, x:-200 });
	// TweenMax.fromTo(h1, .5, {rotationY:-180},{rotationY:0});
   }
}