import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  //Navigation bar
  //Changes routing to be dynamic
  template: `
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Website Title';
}
