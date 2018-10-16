import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../dtos/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/login/";


@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, customer)
      .pipe(
        map((result)=>{
          sessionStorage.setItem("token", result + "");
          if (result){
            this.router.navigate(['/main']);
          }
          return result;
        })
      )
  }

  isAuthenticated(): boolean{
    if (sessionStorage.getItem("token")){
      return sessionStorage.getItem("token") == 'false' ? false: true;
    }
  }
}
