import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.scss']
})
export class CustomerListItemComponent {
  @Input() customer?: Customer;
}
