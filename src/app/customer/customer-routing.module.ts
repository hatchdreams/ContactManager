import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CustomerComponent},
  {path: ':id', component: CustomerComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CustomerRoutingModule { }
