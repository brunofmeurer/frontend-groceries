import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})

/**
 * @author Bruno Meurer
 * @description my progress bar
 */
export class ProgressbarComponent implements OnInit {
  @Input() loading: boolean
  constructor() { }
  ngOnInit() {
  }
}