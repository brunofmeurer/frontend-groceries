import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grocerie } from 'src/app/models/Grocerie';
import {ConfirmationService} from 'primeng/api';
import { GroceriesService } from 'src/app/services/groceries.service';
import { Router } from '@angular/router';

/**
 * @author Bruno Meurer
 * @description Item List display
 */
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  /**
   * @description grocerie view
   */
  @Input() grocerie: Grocerie

  /**
   * @description delete function
   */
  @Output() delete = new EventEmitter();
  constructor(
    private confirmationService: ConfirmationService,
    private groceriesService: GroceriesService,
    private router: Router) { }

  /**
   * 
   * @param index 
   * @description when click on delete button call function param
   */
  clickOnDelete(index: number) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja eliminar este mantimento?',
        accept: () => {
          this.delete.emit(index)
        }
    });
  }

  /**
   * 
   * @param index 
   * @description when click on edit, nav to edit page
   */
  edit(index: number) {
    this.router.navigate(['/mantimentos/editar/' + index]);
  } 
}
