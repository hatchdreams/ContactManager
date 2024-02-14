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

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
  }
}
