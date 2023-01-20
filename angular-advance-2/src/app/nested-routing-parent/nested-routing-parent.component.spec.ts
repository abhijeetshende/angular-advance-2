import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingParentComponent } from './nested-routing-parent.component';

describe('NestedRoutingParentComponent', () => {
  let component: NestedRoutingParentComponent;
  let fixture: ComponentFixture<NestedRoutingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRoutingParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRoutingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
