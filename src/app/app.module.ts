import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GroceriesMaintenanceComponent } from './pages/groceries-maintenance/groceries-maintenance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GroceriesListComponent } from './pages/groceries-list/groceries-list.component';
import { MenuModule } from 'primeng/menu';

// utils
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';

// alerts
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

// components list
import {DataViewModule} from 'primeng/dataview';
import {CardModule} from 'primeng/card';

// forms
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyMaskModule } from "ng2-currency-mask";

// custom
import { MenuComponent } from './components/menu/menu.component'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { ItemListComponent } from './components/itemList/item-list.component'
import { SpoilsPipe } from './pipes/spoils.pipe'
import { ProgressbarComponent } from './components/progressbar/progressbar.component'

@NgModule({
  declarations: [
    AppComponent,
    GroceriesMaintenanceComponent,
    DashboardComponent,
    GroceriesListComponent,
    MenuComponent,
    BreadcrumbComponent,
    ItemListComponent,
    ProgressbarComponent,
    SpoilsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    SidebarModule,
    InputSwitchModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    CalendarModule,
    DataViewModule,
    CardModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    ProgressBarModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
