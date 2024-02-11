import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerProfileComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule
  ]
})
export class CustomerModule { }
