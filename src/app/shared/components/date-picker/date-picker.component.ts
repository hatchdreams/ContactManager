import { Component, Input, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent {
  @Input() type = 'text';
  @Input() label = '';
  @Input() minYearsInPast: number=120;
  @Input() maxYearsInFuture: number=0;
  minDate: Date = new Date();
  maxDate: Date = new Date();;
  
  constructor(@Self() public controlDir: NgControl) { 
    this.controlDir.valueAccessor = this;
  }


  writeValue(obj: any): void {
    this.minDate.setFullYear( this.minDate.getFullYear() - this.minYearsInPast );
    this.maxDate.setFullYear( this.maxDate.getFullYear() + this.maxYearsInFuture );
  }
  
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }

  get control(): FormControl {
    return this.controlDir.control as FormControl
  }

}
