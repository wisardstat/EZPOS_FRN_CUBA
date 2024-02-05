import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { PRODUCT } from '../../../shared/data/tables/product-list';
// ****  Service  *****
import { vstockcard_list } from '../../../shared/services/vstockcard.service'
import { inventory_list } from '../../../shared/services/inventory.service'
import { brand_list } from '../../../shared/services/brand.service'
import { category_list } from '../../../shared/services/categpry.service'

@Component({
  selector: 'app-rp-bymodel',
  templateUrl: './rp-bymodel.component.html',
  styleUrls: ['./rp-bymodel.component.scss']
})

export class RpBymodelComponent implements OnInit{
  
  public defaultBindingsList = [
    { value: "1", label: "Alabama", job: "Developer" },
    { value: "2", label: "Wyoming", job: "Developer" },
    { value: "3", label: "Coming", job: "Designer",disabled:true },
    { value: "4", label: "Hanry Die", job: "Designer" },
    { value: "5", label: "John Doe", job: "Designer" },
  ];

  public products = PRODUCT;
  public _vstockcard_list:any;
  public _inventory_list:any;
  public _category_list:any;
  public _brand_list:any;
  public selected_category: string;
  public selected_brand: string;



  constructor(
    private vstockcard_list_sv:vstockcard_list,
    private inventory_list_sv:inventory_list,
    private category_list_sv:category_list,
    private brand_list_sv:brand_list,
    ) {
    // this.products = productDB.product;
  }

  
  ngOnInit() { 
    this.selected_category="ทั้งหมด"
    this.selected_brand=this.selected_category


    // this.vstockcard_list_sv.getListAll().subscribe(response => {this._vstockcard_list = response;});
    this.inventory_list_sv.getValue().subscribe(response => {this._inventory_list = response;});
    this.category_list_sv.getValue().subscribe(response => {this._category_list = response;});
    this.brand_list_sv.getValue().subscribe(response => {this._brand_list = response;});
    
    console.log('Category >> ');
  }

  public onSearch(){

    console.log('Clicked onSearch');

    console.log('selected_brand =>',this.selected_brand);
    console.log('selected_category =>',this.selected_category);

    this.vstockcard_list_sv.getListReport(this.selected_brand).subscribe(response => {this._vstockcard_list = response;});

  }

}