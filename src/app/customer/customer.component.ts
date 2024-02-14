import { Component, HostListener, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../shared/models/customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

@HostListener('window:resize', ['$event'])


export class CustomerComponent implements OnInit{
  isMobileView: boolean = true;
  customers: Customer[] = [];
  customersCopy: Customer[] = [];
  selectedCustomer?: Customer;
  search: string = '';

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute,
      private router: Router) {}

  ngOnInit(): void {
    this.getCustomers();
    this.setMobileView();
    this.selectInitialCustomer();
  }

  onResize() {
    this.setMobileView();
  }

  //move to global
  setMobileView() {
    this.isMobileView = window.innerWidth <= 767;
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: response => {
        this.customers = response,
        this.customersCopy = response,
        this.selectInitialCustomer();
      }
    });
  }

  selectInitialCustomer() {
    const selectedCustomerNumber = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (selectedCustomerNumber) {
      this.selectedCustomer = this.customers.find(customer => customer.customer_number == selectedCustomerNumber);

      if (!this.selectedCustomer)
        this.router.navigateByUrl('/customer');
    }
     
    else if (!this.isMobileView)
      this.selectedCustomer = this.customers[0];
  }
  
  selectCustomerRow(customer: Customer) {
    this.selectedCustomer = customer;
  }

  backToList() {
    delete this.selectedCustomer;
  }

  createNewCustomer() {
    this.selectedCustomer = new Customer;
    this.clearSearch();
  }

  filterResults() {
    this.customers = this.customersCopy.filter(customer => 
      (customer.first_name + ' ' + customer.last_name).toLowerCase().includes(this.search.toLowerCase())
    );
  }

  clearSearch() {
    this.search = '';
    this.filterResults();
  }
}
