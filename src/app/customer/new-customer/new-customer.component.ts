import { Component, Input } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, finalize, map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent {
  newCustomer: Customer = new Customer();
  errors: string[] | null = null;

  phoneValidator ="[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]"
  socialSecurityValidator = "[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]"
  zipCodeValidator = "[0-9][0-9][0-9][0-9][0-9]";

  constructor(private fb: FormBuilder, private customerService: CustomerService, private toastr: ToastrService) {}

  customerForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    date_birth: ['', Validators.required],
    ssn: ['', [Validators.pattern(this.socialSecurityValidator), Validators.required]],
    email: ['', [Validators.email, Validators.required], [this.validEmailNotTaken()]],
    mobile_phone_number: ['', [Validators.pattern(this.phoneValidator), Validators.required]],
    address_line_1: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip_code: ['', [Validators.pattern(this.zipCodeValidator), Validators.required]],
  })

  onSubmit() {
    if (this.customerForm.valid)
      this.customerService.newCustomer(this.customerForm.value).subscribe({
        next: () => this.toastr.success('Customer Added'),
        error: error => this.errors = error.errors
      })
    else {
      this.customerForm.markAllAsTouched();
    }
  }

  validEmailNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(1000),
        take(1),
        switchMap(() => {
          return this.customerService.checkEmailExists(control.value).pipe(
            map(result => result ?  null : {emailExists: true}),
            finalize(() => control.markAsTouched())
          )
        })
      )
    }
  }


}
