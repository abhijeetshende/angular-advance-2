import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateGuard, TestdeactivateGuard } from '../testdeactivate.guard';

@Component({
  selector: 'app-nested-routing-child2',
  templateUrl: './nested-routing-child2.component.html',
  styleUrls: ['./nested-routing-child2.component.scss'],
})
export class NestedRoutingChild2Component implements IDeactivateGuard, OnInit {
  canExit() {
    if (confirm('Ok ?')) {
      return true;
    } else {
      return false;
    } 
  }
  constructor(private route: ActivatedRoute) {}
  showData:any;
  ngOnInit(): void {
 setTimeout(()=>{
  this.route.data.subscribe((data) => {
    console.log('resolved data', data);
    this.showData = data;
  });

 },3000)
  }
}
