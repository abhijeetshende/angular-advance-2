import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
constructor(private router:Router){

}
returnBack(){
  this.router.navigate(['component1'])
}
}
