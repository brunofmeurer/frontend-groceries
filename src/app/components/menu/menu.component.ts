import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
/**
 * @author Bruno Meurer
 * @description Toolbar menu component
 */
export class MenuComponent implements OnInit {
  @Input() title: string = "My App"
  constructor() { }
  @Input() items: MenuItem[]
  ngOnInit() {
  }
}
