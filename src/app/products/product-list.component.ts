import { Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Iproduct } from './product';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from '../product.service';
import { StarComponent } from '../shared/star.component';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit, AfterViewInit {
    public pageTitle = 'Product Listing';
    imageHeight: number = 30;
    showImage: boolean = true;
    filterText: string = 'cart';
    products: Iproduct[];
    filteredProducts: Iproduct;
    items: any;
    errorMessage: string;

    @ViewChild('product_name_link') pro_name_link: ElementRef;

    @ViewChildren(StarComponent)
    private starCom: QueryList<StarComponent>;

    public starComArray: Array<StarComponent>;

    constructor(private _productSearvice: ProductService) {
        this.products = this._productSearvice.getData();

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
        // test code for view chidren
        this.starComArray[1].valueFromParent = 'string from parent';
        // change dom style with view child and elementref
        this.pro_name_link.nativeElement.style.color = 'red';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    toggleButton(): void {

    }

    ngAfterViewInit(): void {
       // this.starCom.valueFromParent = 'string from parent';
       this.starComArray = this.starCom.toArray();
    }

    ngOnInit(): void {
       // console.log('on init here');
      // this._productSearvice.getProduct(2).subscribe(val=>console.log(val));
      // this._productSearvice.getProducts().subscribe(val=>console.log(val));
     }
}
