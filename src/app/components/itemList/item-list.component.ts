import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Grocerie } from 'src/app/models/Grocerie';
import {ConfirmationService} from 'primeng/api';
import { GroceriesService } from 'src/app/services/groceries.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
/**
 * @author Bruno Meurer
 * @description Item List display
 */
export class ItemListComponent implements OnInit {
  @Input() grocerie: Grocerie
  @Output() refresh = new EventEmitter();
  constructor(
    private confirmationService: ConfirmationService,
    private groceriesService: GroceriesService) { }
  ngOnInit() {
  }

  delete(index: number) {
    
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja eliminar este mantimento?',
        accept: () => {
          this.groceriesService.delete(index).then((response) => {
            if (response) {
              this.refresh.emit(null)
            }
          })
        }
    });
  }

  edit() {
    console.log(this.groceriesService.get())
  }

  
}
