import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemBreadcrumb } from '../../models/ItemBreadcrumb';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

/**
 * @author Bruno Meurer
 * @description My simple breadcrumb component (I know, the prime face has a breadcrumb component)
 */
export class BreadcrumbComponent implements OnInit {
  @Input() items: Array<ItemBreadcrumb>
  constructor() { }
  ngOnInit() {
  }
}