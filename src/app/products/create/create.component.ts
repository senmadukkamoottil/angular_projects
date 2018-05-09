import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productName: string = '';
  productCode: string = '';
  availableDate: string = '';
  price: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  save (createForm: any) {
    console.log('save' + JSON.stringify(createForm.value));
  }
}
