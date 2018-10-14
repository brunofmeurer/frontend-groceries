import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarComponent } from './progressbar.component';

describe('GroceriesMaintenanceComponent', () => {
  let component: ProgressbarComponent;
  let fixture: ComponentFixture<ProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    component.items = [new ItemBreadcrumb("list", "/mantimentos"), new ItemBreadcrumb("inicio", "/inicio")]
    expect(component).toBeTruthy();
  });*/
});
