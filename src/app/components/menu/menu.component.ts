import { Component, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';

/**
 * @author Bruno Meurer
 * @description Toolbar menu component
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  /**
   * @description title app
   */
  @Input() title: string = "My App"

  /**
   * @description menu links 
   */
  @Input() items: MenuItem[]
}
