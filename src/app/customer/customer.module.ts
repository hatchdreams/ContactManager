import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerProfileComponent,
    CustomerListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
