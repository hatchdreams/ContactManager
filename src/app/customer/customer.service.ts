import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;
  key = environment.apiKey; 

  constructor(private http: HttpClient) { }

  getCustomers() {
    let params = new HttpParams();
    params = params.append('key', this.key);

    return this.http.get<Customer[]>(this.baseUrl + 'customers.json', {params})
  }

  newCustomer(customerForm: any) {
    let params = new HttpParams();
    params = params.append('key', this.key);

    return this.http.post<Customer>(this.baseUrl + 'customers.json' , {params})
  }

}
