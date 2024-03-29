import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { AgePipe } from './pipes/age.pipe';


@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DateAgoPipe,
    AgePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule
  ],
  exports: [
    NavBarComponent,
    NgxSpinnerModule,
    DateAgoPipe,
    AgePipe
  ]
})
export class CoreModule { }
