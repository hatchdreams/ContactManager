import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', loadChildren: () => import("./customer/customer.module").then(m => m.CustomerModule)}, //lazy load
  {path: 'business', component: BusinessComponent},
  {path: 'test-error', component: TestErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', redirectTo: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
