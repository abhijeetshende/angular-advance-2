import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { NestedRoutingChildComponent } from './nested-routing-child/nested-routing-child.component';
import { NestedRoutingChild2Component } from './nested-routing-child2/nested-routing-child2.component';
import { NestedRoutingParentComponent } from './nested-routing-parent/nested-routing-parent.component';
import { ResolveService } from './services/resolve.service';
import { TestGuard } from './test.guard';
import { TestdeactivateGuard } from './testdeactivate.guard';

const routes: Routes = [
  { path: 'component1', component: Component1Component },
  { path: 'component1/:id/:username', component: Component1Component },
  { path: 'component2', component: Component2Component },
  {
    path: 'nestedrouting',
    component: NestedRoutingParentComponent,
    canActivateChild:[TestGuard],

    children: [
      {
        path: 'child1',
        component: NestedRoutingChildComponent,
      },
      {
        path: 'child2',
        component: NestedRoutingChild2Component,
        canDeactivate:[TestdeactivateGuard],
        resolve:[ResolveService]
      },
      {
        path: '**',
        pathMatch:'full',
        component: NestedRoutingChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
