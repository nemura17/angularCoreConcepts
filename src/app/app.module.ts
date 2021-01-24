import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module'
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module'

@NgModule({
  imports: [ BrowserModule, CoreModule, OrdersModule, AppRoutingModule, CustomersModule, NgbModule, 
  SharedModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
