import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iproduct } from './products/product';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class ProductService {
  productss: Iproduct[] = [
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
k: any;
private productUrl: string = 'http://localhost:3000/products';

  constructor(private _http: HttpClient) { }

  fetchData(): Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(this.productUrl)
    // .do(data => console.log('The required data'))
    .catch(this.handleError);
  }

  getProduct(id: number): Observable<Iproduct> {
    return this.fetchData()
        .map((products: Iproduct[]) => products.find(p => p.productId === id));
}

getProducts(): Observable<Iproduct[]> {
  return this.fetchData()
      .map((products: Iproduct[]) => products.filter(p => p.productId > 0));
}

  getData(): Iproduct [] {
       return this.productss;
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Error occurred');
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}

}
