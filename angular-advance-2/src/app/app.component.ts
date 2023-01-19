import { Component } from '@angular/core';


interface sidebarLinks {
  linkname: string;
  routerLink: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-advance-2';
  tutorialLinks: sidebarLinks[] = [
    { linkname: 'Route Component1', routerLink: 'component1' },
    { linkname: 'Route Component2', routerLink: 'component2' }
  ];
}
