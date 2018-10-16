import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './views/customer/customer.component';
import { MainComponent } from './views/main/main.component';
import { CustomerService } from './services/customer.service';
import { AuthService } from './services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routers: Routes = [
  {path: "customer", component: CustomerComponent},
  {path: "main", component: MainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [AuthService,
  CustomerService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
