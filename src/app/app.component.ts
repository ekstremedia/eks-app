import { Component } from '@angular/core';

import 'jquery';
// declare var TimelineMax:any;
// const TimelineMax = require('gsap').TimelineMax;
// declare var $:JQueryStatic;

@Component({
  selector: 'my-app',
  template: `
  <nav-bar></nav-bar>
  <h1>
  &nbsp; 
  </h1>
  <nav-meny></nav-meny>
  
 <router-outlet></router-outlet>
  `,
  // styleUrls: ['../app.component.css']
})
export class AppComponent {
   title = 'My Angular 2 Quickstart' ;
  constructor() {

       console.log("home");
    }
  ngOnInit(){

    // let tl = TimelineMax(); // this is free of errors now

    // tl.play();  
 }
}