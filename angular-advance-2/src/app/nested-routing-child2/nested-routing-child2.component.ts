import { Component } from '@angular/core';
import {
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
export class NestedRoutingChild2Component implements IDeactivateGuard {
  canExit() {
    if (confirm('Ok ?')) {
      return true;
    } else {
      return false;
    }
  }
}
