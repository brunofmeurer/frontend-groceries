import { Component, OnInit } from '@angular/core';
import { ItemBreadcrumb } from '../../models/ItemBreadcrumb'
import { Router } from '@angular/router';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css']
})
export class GroceriesListComponent implements OnInit {
  itemsBreadcrumb: Array<ItemBreadcrumb> = new Array()
  constructor(private router: Router) {
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Dashboard", "/dashboard"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("List Groceries", "/groceries"))
  }

  ngOnInit() {
  }

  add() {
    this.router.navigate(['/groceries/add']);
  }

}
