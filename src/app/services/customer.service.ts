import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../dtos/customer';
import { Observable } from 'rxjs';


export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/customer/";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  saveCustomer(customer: Customer): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,customer);
  }
}
