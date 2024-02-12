import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';



@NgModule({
  declarations: [
    TextInputComponent,
    SelectDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    TextInputComponent,
    SelectDropdownComponent
  ]
})
export class SharedModule { }
