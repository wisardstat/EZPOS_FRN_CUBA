import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { PRODUCT } from '../../../../shared/data/tables/product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  public products = PRODUCT;

  constructor() {
    // this.products = productDB.product;
  }

  ngOnInit() { }

}
