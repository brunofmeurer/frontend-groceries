import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GroceriesMaintenanceComponent } from './pages/groceries-maintenance/groceries-maintenance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GroceriesListComponent } from './pages/groceries-list/groceries-list.component';
import { MenuModule } from 'primeng/menu';

import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// custom
import { MenuComponent } from './components/menu/menu.component'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'

@NgModule({
  declarations: [
    AppComponent,
    GroceriesMaintenanceComponent,
    DashboardComponent,
    GroceriesListComponent,
    MenuComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
