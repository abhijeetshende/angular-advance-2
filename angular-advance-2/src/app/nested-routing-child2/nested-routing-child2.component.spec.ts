import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingChild2Component } from './nested-routing-child2.component';

describe('NestedRoutingChild2Component', () => {
  let component: NestedRoutingChild2Component;
  let fixture: ComponentFixture<NestedRoutingChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRoutingChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
