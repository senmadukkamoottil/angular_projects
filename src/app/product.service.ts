import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from './products/product';

@Injectable()
export class ProductService {
  products: Iproduct[] = [
    {
        'productId': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.9567,
        'starRating': 3.5,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
        'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.9955,
        'starRating': 4.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    }
];
private productUrl: string = '../api/location';
// private _http: HttpClient
  constructor() { }
  getData(): Iproduct [] {
  // getData(): Observable<Iproduct[]> {
     return this.products;
    // return this._http.get<Iproduct[]>(this.productUrl);
  }

}
