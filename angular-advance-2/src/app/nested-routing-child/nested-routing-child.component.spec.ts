import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingChildComponent } from './nested-routing-child.component';

describe('NestedRoutingChildComponent', () => {
  let component: NestedRoutingChildComponent;
  let fixture: ComponentFixture<NestedRoutingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRoutingChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
