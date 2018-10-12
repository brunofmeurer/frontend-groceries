import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesMaintenanceComponent } from './pages/groceries-maintenance/groceries-maintenance.component'
import { GroceriesListComponent } from './pages/groceries-list/groceries-list.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { AppComponent } from './app.component'


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'mantimentos', component: GroceriesListComponent },
  { path: 'mantimentos/novo', component: GroceriesMaintenanceComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }