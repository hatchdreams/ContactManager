import { Component, Input } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer';
import { Option } from 'src/app/shared/models/option';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, finalize, map, switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { stateOptions } from 'src/app/shared/constants/states';
import { regexPhone, regexSocialSecurity, regexZipCode } from 'src/app/shared/constants/regexes';


@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class NewCustomerComponent {
  bsInlineValue = new Date();
  errors: string[] | null = null;
  stateOptions: Option[] = stateOptions;

  constructor(private fb: FormBuilder, private customerService: CustomerService, 
    private toastr: ToastrService, private router: Router) {}

  customerForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.minLength(2)]],
    last_name: ['', [Validators.required, Validators.minLength(2)]],
    date_birth: ['', Validators.required],
    ssn: ['', [Validators.pattern(regexSocialSecurity), Validators.required], [this.validSSNNotTaken()]],
    email: ['', [Validators.email, Validators.required], [this.validEmailNotTaken()]],
    mobile_phone_number: ['', [Validators.pattern(regexPhone), Validators.required]],
    address_line_1: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', [Validators.required]],
    zip_code: ['', [Validators.pattern(regexZipCode), Validators.required]],
  })
  
  onSubmit() {
    if (this.customerForm.valid)
      this.customerService.newCustomer(this.customerForm.value).subscribe({
        next: () =>  {
          this.toastr.success('Customer Added')
          this.customerForm.reset();
          this.router.navigateByUrl('/customer');
        },
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
          return this.customerService.checkSSNExists(control.value).pipe(
            map(result => result ?  {ssnExists: true} : null),
            finalize(() => control.markAsTouched())
          )
        })
      )
    }
  }

  validSSNNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(1000),
        take(1),
        switchMap(() => {
          return this.customerService.checkEmailExists(control.value).pipe(
            map(result => result ?  {emailExists: true} : null),
            finalize(() => control.markAsTouched())
          )
        })
      )
    }
  }

  //not working
  noWhitespaceValidator() {
    return (control: FormControl) => {
      (control.value || '').trim().length ? {whitespace: true} : null;
    }
  }

  cancelNewCustomer() {
    this.customerForm.reset();
    this.router.navigateByUrl('/customer');
  }
}
