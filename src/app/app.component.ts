import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Customer Manager';
  customers: Customer[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Customer[]>('https://my.api.mockaroo.com/customers.json?key=03c46990').subscribe({
      next: response => {
        this.customers = response;
      },
      error: error=> console.log(error),
      complete: () => {
        console.log('request completed');
      }
    })
  }
}
