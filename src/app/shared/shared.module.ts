import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

@NgModule({
  declarations: [
    TextInputComponent,
    SelectDropdownComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    TextInputComponent,
    SelectDropdownComponent,
    DatePickerComponent,
    TooltipModule,
    BsDatepickerModule,
  ]
})
export class SharedModule { }
