import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../dtos/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  selectedCustomer: Customer = new Customer();
  tempCustomer: Customer = null;
  mannuallySelected: false;
  @ViewChild("frmCustomer") frmCustomer: NgForm;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  saveCustomer(): void{
    this.customerService.saveCustomer(this.selectedCustomer).subscribe(
      (result)=>{
        if (result){
          alert("Congrats! You Sussefully Registerd! success")
        }else{
          alert("OOPs! Something wents wrong try again! error")
        }
      }
    )
  }

}
