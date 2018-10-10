import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesMaintenanceComponent } from './pages/groceries-maintenance/groceries-maintenance.component'
import { GroceriesListComponent } from './pages/groceries-list/groceries-list.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { AppComponent } from './app.component'


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'groceries', component: GroceriesListComponent },
  { path: 'groceries/add', component: GroceriesMaintenanceComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }