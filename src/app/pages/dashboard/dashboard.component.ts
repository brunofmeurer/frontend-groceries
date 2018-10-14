import { Component, OnInit } from '@angular/core';
import { GroceriesService } from 'src/app/services/groceries.service';

/**
 * @author Bruno Meurer
 * @description component page to start view
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /**
   * @description data view infos
   */
  data: any

  /**
   * @description loading flag
   */
  loading: boolean

  constructor(private groceriesService:GroceriesService) {
    this.data = {count: 0, priceAverage: 0, expiredGroceries: 0}
    this.loading = false
   }

  /**
   * @description initialize data
   */
  ngOnInit() {
    this.loading = true
    this.groceriesService.list().then(response => {
      this.loading = false
      if (response != null) {        
        this.data['count'] = response.length

        let priceAverage = 0
        let expiredGroceries = 0
        response.forEach(grocerie => {
          priceAverage += grocerie.price
          if (grocerie.expirationDate != null && new Date(grocerie.expirationDate).getTime() < (new Date()).getTime()) {
            expiredGroceries++
          }
        })
        this.data['priceAverage'] = priceAverage / this.data.count
        this.data['expiredGroceries'] = expiredGroceries
      }
    })
  }
}
