import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public pageTitle: string = 'Product Detail page';
  id: number = 0;
  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;
  }

  back(): void {
    this._router.navigate(['/products']);
  }
}
