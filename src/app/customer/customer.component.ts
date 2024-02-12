import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../shared/models/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit{
  createNew: boolean = false;
  customers: Customer[] = [];
  selectedCustomer?: Customer;
  search: string = '';

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: response => {
        this.customers = response,
        this.selectCustomer();
      },
      error: error => console.log(error)
    })
  }

  selectCustomer() {
    const selectedCustomerNumber = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (selectedCustomerNumber)
      this.selectedCustomer = this.customers.find(customer => customer.customer_number == selectedCustomerNumber);
    else
      this.selectedCustomer = this.customers[0];
  }

  createNewCustomer() {
    this.createNew=true;
    this.selectedCustomer = new Customer();
  }

  //frontend filtering, limited api
  filterResults() {
 
  }

}
