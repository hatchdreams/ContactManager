import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    let params = new HttpParams();
    params = params.append('key', environment.apiKey);

    return this.http.get<Customer[]>(`${environment.apiUrl}customers.json`, {params})
  }

  newCustomer(customerForm: any) {
    //fake api - will always return 201
    return this.http.post<any>(`${environment.apiUrl}customers.json?key=${environment.apiKey}`, customerForm)
  }

  checkEmailExists(email: string) {
    //fake api - will always return 201
    return this.http.post<any>(`${environment.apiUrl}customers.json?key=${environment.apiKey}`, email)
  }


}
