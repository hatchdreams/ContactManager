import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit{
  customers: Customer[] = [];
  selectedCustomer: Customer = this.customers[0];
  search: string = '';
  
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: response => {
        this.customers = response,
        this.selectedCustomer = this.customers[0];
      },
      error: error => console.log(error)
    })
  }

}
