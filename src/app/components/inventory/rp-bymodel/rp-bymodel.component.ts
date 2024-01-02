import { Component } from '@angular/core';


import { PRODUCT } from '../../../shared/data/tables/product-list';

@Component({
  selector: 'app-rp-bymodel',
  templateUrl: './rp-bymodel.component.html',
  styleUrls: ['./rp-bymodel.component.scss']
})

export class RpBymodelComponent {
  
  public products = PRODUCT;

  constructor() {
    // this.products = productDB.product;
  }

  
  ngOnInit() { }

}