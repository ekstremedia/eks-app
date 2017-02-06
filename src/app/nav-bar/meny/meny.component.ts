import { Component, OnInit } from '@angular/core';

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
}