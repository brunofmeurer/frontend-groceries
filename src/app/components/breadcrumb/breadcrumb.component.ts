import { Component, Input } from '@angular/core';
import { ItemBreadcrumb } from '../../models/ItemBreadcrumb';

/**
 * @author Bruno Meurer
 * @description My simple breadcrumb component (I know, the prime face has a breadcrumb component)
 */
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  /**
   * @description itens of breadcrumb
   */
  @Input() items: Array<ItemBreadcrumb>
}