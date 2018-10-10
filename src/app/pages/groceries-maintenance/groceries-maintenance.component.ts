import { Component, OnInit } from '@angular/core';
import { ItemBreadcrumb } from '../../models/ItemBreadcrumb'
import { GroceriesService } from 'src/app/services/groceries.service';

@Component({
  selector: 'app-groceries-maintenance',
  templateUrl: './groceries-maintenance.component.html',
  styleUrls: ['./groceries-maintenance.component.css']
})
export class GroceriesMaintenanceComponent implements OnInit {
  itemsBreadcrumb: Array<ItemBreadcrumb> = new Array()
  constructor(private groceriesService: GroceriesService) {
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Dashboard", "/dashboard"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("List Groceries", "/groceries"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Add", "/groceries/add"))
  }

  ngOnInit() {
  }

  save() {

  }

  cancel() {
    
  }

}
