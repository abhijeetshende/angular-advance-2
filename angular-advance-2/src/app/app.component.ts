import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


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
  constructor(private authService:AuthService){

  }
  title = 'angular-advance-2';
  tutorialLinks: sidebarLinks[] = [
    { linkname: 'Route Component1', routerLink: 'component1' },
    { linkname: 'Route Component2', routerLink: 'component2' },
    { linkname: 'nestedRouting', routerLink: 'nestedrouting' }
  ];
  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
}
