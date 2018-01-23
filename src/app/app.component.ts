import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  productList: any;
  pageTitle = 'Angular Product Management';
  constructor(private _productSearvice: ProductService) {
    this.productList = this._productSearvice.getData();
  }
}
