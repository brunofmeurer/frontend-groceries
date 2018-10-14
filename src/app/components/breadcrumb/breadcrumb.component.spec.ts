import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { ItemBreadcrumb } from 'src/app/models/ItemBreadcrumb';

describe('GroceriesMaintenanceComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    component.items = [new ItemBreadcrumb("list", "/mantimentos"), new ItemBreadcrumb("inicio", "/inicio")]
    expect(component).toBeTruthy();
  });*/
});
