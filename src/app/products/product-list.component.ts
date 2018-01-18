import { Component } from '@angular/core'
import { Iproduct } from './product';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
    products: Iproduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.9567,
            "starRating": 3.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.9955,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List '+ message;
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    };
    toggleButton(): void{

    };
    ngOnInit(): void{
        console.log("on init here");
    }
}