import { Component } from '@angular/core';

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
}
