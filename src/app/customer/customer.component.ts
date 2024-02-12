import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../shared/models/customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit{
  createNew: boolean = false;
  customers: Customer[] = [];
  customersCopy: Customer[] = [];
  selectedCustomer?: Customer;
  search: string = '';

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute,
      private router: Router) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: response => {
        this.customers = response,
        this.customersCopy = response,
        this.selectCustomerFromUrl();
      },
      error: error => console.log(error)
    })
  }

  selectCustomerFromUrl() {
    const selectedCustomerNumber = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (selectedCustomerNumber)
      this.selectedCustomer = this.customers.find(customer => customer.customer_number == selectedCustomerNumber);
    else
      this.selectedCustomer = this.customers[0];

    if (!this.selectedCustomer)
      this.router.navigateByUrl('/customer');
  }
  
  
  selectCustomerRow(customer: Customer) {
    this.selectedCustomer = customer;
    this.createNew = false;
  }

  
  createNewCustomer() {
    this.createNew = true;
    this.selectedCustomer = new Customer();
    this.search = '';
    this.filterResults();
  }

  //frontend filtering, limited api
  filterResults() {
    this.customers = this.customersCopy.filter(customer => customer.first_name.includes(this.search) 
      || customer.last_name.includes(this.search))
  }
}
