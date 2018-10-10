import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesMaintenanceComponent } from './groceries-maintenance.component';

describe('GroceriesMaintenanceComponent', () => {
  let component: GroceriesMaintenanceComponent;
  let fixture: ComponentFixture<GroceriesMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceriesMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
