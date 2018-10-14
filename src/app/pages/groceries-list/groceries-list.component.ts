import { Component, OnInit } from '@angular/core';
import { ItemBreadcrumb } from '../../models/ItemBreadcrumb'
import { Router } from '@angular/router';
import { GroceriesService } from 'src/app/services/groceries.service';
import { Grocerie } from 'src/app/models/Grocerie';
import { SelectItem } from 'primeng/api';

/**
 * @author Bruno Meurer
 * @description component page to list groceries
 */
@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css']
})
export class GroceriesListComponent implements OnInit {

  /**
   * @description itens of custom breadcrumb
   */
  itemsBreadcrumb: Array<ItemBreadcrumb> = new Array()

  /**
   * @description list of groceries
   */
  list:Array<Grocerie>

  /**
   * @description sort options
   */
  sortOptions: SelectItem[]

  /**
   * @description sort order
   */
  sortOrder: number

  /**
   * @description selected sort field
   */
  sortField: string

  /**
   * @description flag to set loading
   */
  loading: boolean
  constructor(
    private router: Router,
    private groceriesService: GroceriesService ) {
      this.list = []
      this.loading = false
  }

  /**
   * @description initialize app
   */
  ngOnInit() {
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Inicio", "/inicio"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Listar Mantimentos", "/mantimentos"))
    this.sortOptions = [
      {label: 'Nome', value: 'name'},
      {label: 'valor', value: 'price'}
    ];
    this.fetch()
  }

  /**
   * @description fetch data list
   */
  fetch() {
    this.loading = true
    this.groceriesService.list().then((response) => {
      if (response != null) {
        this.list = response.map((e, index) => {
          let grocerie = new Grocerie()
          grocerie = e
          grocerie.index = index
          return grocerie
        })
      }
      this.loading = false
    })
  }

  /**
   * 
   * @param event 
   * @description set sort field
   */
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

  /**
   * @description click on add button
   */
  add() {
    this.router.navigate(['/mantimentos/novo']);
  }
}
