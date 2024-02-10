import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', loadChildren: () => import("./customer/customer.module").then(m => m.CustomerModule)}, //lazy load
  {path: 'business', component: BusinessComponent},
  {path: '**', redirectTo: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
