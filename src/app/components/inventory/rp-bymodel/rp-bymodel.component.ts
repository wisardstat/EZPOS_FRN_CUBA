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
  public selected_wh: string;
  public selected_type_rp: string;

  public numberOfUnreadAlerts : number ; 

  constructor(
    private vstockcard_list_sv:vstockcard_list,
    private inventory_list_sv:inventory_list,
    private category_list_sv:category_list,
    private brand_list_sv:brand_list,
    ) {
    // this.products = productDB.product;
  }
 
  
  ngOnInit() { 
    this.selected_wh='W001'
    this.selected_type_rp=""
    this.selected_category="ทั้งหมด"    
    this.selected_brand=this.selected_category
    this.numberOfUnreadAlerts=0
    // this.vstockcard_list_sv.getListAll().subscribe(response => {this._vstockcard_list = response;});
    this.inventory_list_sv.getValue().subscribe(response => {this._inventory_list = response;});
    this.category_list_sv.getValue().subscribe(response => {this._category_list = response;});
    this.brand_list_sv.getValue().subscribe(response => {this._brand_list = response;});

    
    
    console.log('Category >> ');
  }

  public onSearch(){
    this.numberOfUnreadAlerts=1

    console.log('Clicked onSearch');
    console.log('selected_brand =>',this.selected_brand);
    console.log('selected_category =>',this.selected_category);
    console.log('selected_wh =>',this.selected_wh);
    console.log('selected_type_rp =>',this.selected_type_rp);
    
    var  sel_brand_post = this.selected_brand
    var  sel_category_post = this.selected_category
    var  sel_wh_post = this.selected_wh
    var  sel_type_rp_post = this.selected_type_rp

    if (this.selected_brand=='ทั้งหมด' || this.selected_brand==null)     
        sel_brand_post="0"

    if (this.selected_category=='ทั้งหมด' || this.selected_category==null )     
        sel_category_post="0"

    if (this.selected_wh=='ทั้งหมด' || this.selected_wh==null )     
        sel_wh_post="0"
    
    if (this.selected_type_rp=='ทั้งหมด' || this.selected_type_rp==null )     
          sel_type_rp_post=""
    

    this.vstockcard_list_sv.getListReport(sel_wh_post,sel_category_post,sel_brand_post,sel_type_rp_post).subscribe(response => {this._vstockcard_list = response;});

   

    setTimeout(() => {
      // Once the loading is complete, set isLoading back to false
      this.numberOfUnreadAlerts=0
    }, 2000); // Adjust the timeout value as per your requirement
    
  }

  // changeFn(val) {
  //   console.log("Dropdown selection:", val);
  // }

}