import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated:boolean= false;
  login(){
    this.isAuthenticated = true;
  }
  logout(){
    this.isAuthenticated = false;
  }
  canDeactivate(){
    if(confirm('do you want to proceed')){
      return true
    }
    else{
      return false;
    }
  }
}
