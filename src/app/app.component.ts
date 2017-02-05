import { Component } from '@angular/core';
// declare var TimelineMax:any;
// const TimelineMax = require('gsap').TimelineMax;

@Component({
  selector: 'my-app',
  template: `
  <h1>
  {{title}}
  </h1>
  <nav>
    <a routerLink="/" routerLinkActive="active">Heim</a>
    <a routerLink="/side2" routerLinkActive="active">side2</a>
    </nav>
 <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'My Ang 2 Quickstart' ;
  constructor() {

       console.log("home");
    }
  ngOnInit(){

    // let tl = TimelineMax(); // this is free of errors now

    // tl.play();  
 }
}