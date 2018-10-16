import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Customer } from './dtos/customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CUSTOMER LOGIN FORM';

  customer: Customer = new Customer();
  failed: boolean;
  @ViewChild("frmLogin") frmLogin = NgForm;

constructor(private router: Router, private authService: AuthService){}

  btnClick = function(){
    this.router.navigateByUrl("/customer");
  }

  loginDb(): void{
    this.authService.login(this.customer).subscribe(
      (result)=>{
        this.failed = !result;
      }
    );
  }
}
