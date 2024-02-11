import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent {
  @Input() selectedCustomer?: Customer;

  phoneValidator = "^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
  socialSecurityValidator = "^(?!000)(?!666)(?<SSN3>[0-6]\d{2}|7(?:[0-6]\d|7[012]))([- ]?)(?!00)(?<SSN2>\d\d)\x01(?!0000)(?<SSN4>\d{4})$"

  constructor(private fb: FormBuilder, private customerService: CustomerService) {}

  customerForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    date_birth: ['', Validators.required],
    ssn: ['', Validators.pattern(this.socialSecurityValidator)],
    email: ['', Validators.email],
    mobile_phone_number: ['', Validators.pattern(this.phoneValidator)],
  })


  onSubmit() {
    this.customerService.newCustomer(this.customerForm.value).subscribe({
      next: () => console.log(this.customerForm.value)
    })
  }

}
