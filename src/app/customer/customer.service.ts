import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { environment } from '../../environments/environment';
import { of, tap } from 'rxjs';
import { PrimaryAddress } from '../shared/models/primaryAdress';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  constructor(private http: HttpClient) { }

  getCustomers() {
    if (this.customers.length != 0) {
      return of(this.customers)
    }
    else {
      let params = new HttpParams();
      params = params.append('key', environment.apiKey);
  
      return this.http.get<Customer[]>(`${environment.apiUrl}customers.json`, {params}).pipe(
        tap(result => {
          this.customers = result;
        })
      )
    }
  }

  newCustomer(customerForm: any) {
    return this.http.post<any>(`${environment.apiUrl}customers.json?key=${environment.apiKey}`, customerForm).pipe(
      tap(result => {
        let newCustomer = new Customer(customerForm);
        newCustomer.primary_address = new PrimaryAddress(customerForm);
        this.customers.unshift(newCustomer);
      })
    )
  }

  checkEmailExists(email: string) {
     //replace with api
    return of(null);
  }

  checkSSNExists(ssn: string) {
    return of(null); //replace with api
  }



}
