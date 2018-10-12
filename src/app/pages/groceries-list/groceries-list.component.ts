import { Component, OnInit } from '@angular/core';
import { ItemBreadcrumb } from '../../models/ItemBreadcrumb'
import { Router } from '@angular/router';
import { GroceriesService } from 'src/app/services/groceries.service';
import { Grocerie } from 'src/app/models/Grocerie';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css']
})
export class GroceriesListComponent implements OnInit {
  itemsBreadcrumb: Array<ItemBreadcrumb> = new Array()
  list:Array<Grocerie>
  sortOptions: SelectItem[]
  sortOrder: number
  sortField: string
  constructor(
    private router: Router,
    private groceriesService: GroceriesService ) {
      this.list = []
  }

  ngOnInit() {
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Inicio", "/inicio"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Listar Mantimentos", "/mantimentos"))
    this.sortOptions = [
      {label: 'Nome', value: 'name'},
      {label: 'valor', value: 'price'}
    ];
    this.fetch()
  }

  fetch() {
    this.groceriesService.list().then((response) => {
      if (response != null) {
        this.list = response.map((e, index) => {
          let grocerie = new Grocerie()
          grocerie = e
          grocerie.index = index
          return grocerie
        })
      }
    })
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  add() {
    this.router.navigate(['/mantimentos/novo']);
  }
}
