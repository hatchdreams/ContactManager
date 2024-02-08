import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../shared/models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'https://my.api.mockaroo.com/customers.json';
  key = '03c46990';

  constructor(private http: HttpClient) { }

  getCustomers() {
    let params = new HttpParams();
    params = params.append('key', this.key);

    return this.http.get<Customer[]>(this.baseUrl, {params})
  }

}
