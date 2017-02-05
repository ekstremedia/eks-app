import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { Side2Component } from './side2/side2.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import 'gsap';

/** Map relative paths to URLs. */
const map: any = {
  'gsap': 'vendor/gsap/src/minified/' // this tells to system.js loader: Hey when you see: "import 'gsap'" in any of my project files, you should load it form: vendor/gsap blah blah..
};

/** User packages configuration. */
const packages: any = {
  gsap: {
    defaultExtension: 'js',
    main: 'TweenMax.min.js' // the entry point for the gsap package.
  }
}; 
@NgModule({
  declarations: [
    AppComponent,
    Side2Component,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 }
