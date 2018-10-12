import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * @author Bruno Meurer
 * @description Main component
 */
export class AppComponent implements OnInit {
  items: MenuItem[]
  ngOnInit(): void {
    this.items = [{
      label: 'Menu',
      items: [
        {label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio'},
        {label: 'Mantimentos', icon: 'pi pi-bars', routerLink: '/mantimentos'}
      ]
    }]
  }
}
