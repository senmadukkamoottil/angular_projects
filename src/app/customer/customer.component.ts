import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer;

  constructor() {
    this.customer = new Customer();
  }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl('Sen'),
      lastName: new FormControl(),
      email: new FormControl()
    });
  }

  submitForm() {
    console.log(this.customerForm.value);
  }

}
