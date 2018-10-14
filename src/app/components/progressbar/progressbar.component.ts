import { Component, Input } from '@angular/core';

/**
 * @author Bruno Meurer
 * @description my progress bar
 */
@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent {
  /**
   * @description loading flag
   */
  @Input() loading: boolean
}