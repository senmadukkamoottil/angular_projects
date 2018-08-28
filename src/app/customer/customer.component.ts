import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, AbstractControl } from '@angular/forms';
// import { FormControl } from '@angular/forms';
import { Customer } from './customer';

/* Custom validator function */
function ratingValiation(c: AbstractControl): {[key: string]: boolean}| null {
  if (c.value !== undefined && (c.value < 1 || c.value > 5)) {
    return {rating: true};
  } else {
    return null;
  }
}

@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer;

  constructor(public fb: FormBuilder) {
    this.customer = new Customer();
  }

  ngOnInit() {
    /*this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    });*/

    /*this.customerForm.patchValue({
      firstName: 'Seen',
      lastName: 'MAdukkamoottil'
    }); */

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: { value: '', disabled: false },
      email: ['', [Validators.pattern('[a-z0-9._]+@[a-z0-9-.]+'), Validators.minLength(3)]],
      phone: '',
      sendVia: 'email',
      rating: ['', [ratingValiation]]
    });
  }

  submitForm() {
    console.log(this.customerForm.value);
  }

  changeViaValidation(viaVal: string): void {
    const phoneControlField = this.customerForm.get('phone');
    const emailControlField = this.customerForm.get('email');
    if (viaVal === 'email') {
      emailControlField.setValidators([Validators.required, Validators.minLength(3)]);
      phoneControlField.clearValidators();
    } else {
      phoneControlField.setValidators([Validators.required, Validators.minLength(6)]);
      emailControlField.clearValidators();
    }
    phoneControlField.updateValueAndValidity();
    emailControlField.updateValueAndValidity();
  }


}
