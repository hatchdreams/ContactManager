import { PrimaryAddress } from "./primaryAdress";

 export interface Customer {
    customer_number: number;
    first_name: string;
    last_name: string;
    date_birth: string;
    ssn?: string;
    email?: string;
    primary_address: PrimaryAddress;
    mobile_phone_number?: string;
    join_date: string;
  }


export class Customer implements Customer {
  customer_number: number = Math.floor(Math.random()*90000) + 10000;
}