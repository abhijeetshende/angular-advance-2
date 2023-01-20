import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { NestedRoutingParentComponent } from './nested-routing-parent/nested-routing-parent.component';
import { NestedRoutingChildComponent } from './nested-routing-child/nested-routing-child.component';
import { NestedRoutingChild2Component } from './nested-routing-child2/nested-routing-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    NestedRoutingParentComponent,
    NestedRoutingChildComponent,
    NestedRoutingChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
