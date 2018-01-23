import { Component } from '@angular/core';
import { Iproduct } from './product';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from '../product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    public pageTitle = 'Product Listing';
    imageHeight: number = 30;
    showImage: boolean = true;
    filterText: string = 'cart';
    products: Iproduct[];

    constructor(private _productSearvice: ProductService) {
        this.products = this._productSearvice.getData();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    toggleButton(): void {

    }
    ngOnInit(): void {
        console.log('on init here');
    }
}
