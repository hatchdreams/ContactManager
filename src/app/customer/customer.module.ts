import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';
import { RouterModule } from '@angular/router';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerProfileComponent,
    CustomerListItemComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
