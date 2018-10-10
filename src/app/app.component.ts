import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[]
  ngOnInit(): void {
    this.items = [{
      label: 'Menu',
      items: [
        {label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard'},
        {label: 'Groceries', icon: 'pi pi-bars', routerLink: '/groceries'}
      ]
    }]
  }
}
