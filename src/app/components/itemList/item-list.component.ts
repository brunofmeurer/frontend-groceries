import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Grocerie } from 'src/app/models/Grocerie';
import {ConfirmationService} from 'primeng/api';
import { GroceriesService } from 'src/app/services/groceries.service';
import { Router } from '@angular/router';

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
  @Output() delete = new EventEmitter();
  constructor(
    private confirmationService: ConfirmationService,
    private groceriesService: GroceriesService,
    private router: Router) { }
  ngOnInit() {
  }

  clickOnDelete(index: number) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja eliminar este mantimento?',
        accept: () => {
          this.delete.emit(index)
        }
    });
  }

  edit(index: number) {
    this.router.navigate(['/mantimentos/editar/' + index]);
  } 
}
