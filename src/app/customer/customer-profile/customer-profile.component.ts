import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent {
  @Input() selectedCustomer?: Customer;
}
