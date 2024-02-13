import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { Observable } from 'rxjs';

// ****  Service  *****
import { vStockDaily } from '../../../shared/services/vStockDaily.service'
import { inventory_list } from '../../../shared/services/inventory.service'
import { brand_list } from '../../../shared/services/brand.service'
import { category_list } from '../../../shared/services/categpry.service'


@Component({
  selector: 'app-rp-bybrand',
  templateUrl: './rp-bybrand.component.html',
  styleUrls: ['./rp-bybrand.component.scss']
})


export class RpBybrandComponent {

     
  public _vstockcard_list: any;
  public _inventory_list:any;
  public _category_list:any;
  public _brand_list:any;

  //public tableItem$: Observable<StockcardDB[]>;

  public selected_category: string;
  public selected_brand: string;
  public selected_wh: string;
  public selected_type_rp: string;
  public select_date : string;

  public numberOfUnreadAlerts : number ; 

  
  constructor(
    private sv_vStockDaily:vStockDaily,
    private inventory_list_sv:inventory_list,
    private category_list_sv:category_list,
    private brand_list_sv:brand_list,
    ) {
    // this.products = productDB.product;
  }

  ngOnInit() { 

    // Set default control search
    this.selected_wh='W001'
    this.selected_type_rp=""
    this.selected_category="ทั้งหมด"    
    this.selected_brand=this.selected_category
    this.numberOfUnreadAlerts=0
    // this.vstockcard_list_sv.getListAll().subscribe(response => {this._vstockcard_list = response;});
    this.inventory_list_sv.getValue().subscribe(response => {this._inventory_list = response;});
    this.category_list_sv.getValue().subscribe(response => {this._category_list = response;});
    this.brand_list_sv.getValue().subscribe(response => {this._brand_list = response;});
    
    const today = new Date(2021,8,27);
    console.log(today); 
    console.log(this.formatDate(today))

    this.select_date = this.formatDate(today)
    // run search 
    //this.onSearch();

  }

  
  public formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
    //return `${day}-${month}-${year}`;
  }

  
  public onSearch(){

    // Show spinner 
    this.numberOfUnreadAlerts=1

    
    console.log('Clicked onSearch');
    console.log('selected_brand =>',this.selected_brand);
    console.log('selected_category =>',this.selected_category);
    console.log('selected_wh =>',this.selected_wh);
    console.log('selected_type_rp =>',this.selected_type_rp);

    console.log('select_date =>',this.select_date);
    
    // Get value from control search 
    var  sel_brand_post = this.selected_brand
    var  sel_category_post = this.selected_category
    var  sel_wh_post       = this.selected_wh
    var  sel_type_rp_post  = this.selected_type_rp
    var  select_date_post  = this.formatDate(new Date(this.select_date));//this.formatDate(this.select_date)

    // Case Select all row 
    if (this.selected_brand=='ทั้งหมด' || this.selected_brand==null)     
        sel_brand_post="0"

    if (this.selected_category=='ทั้งหมด' || this.selected_category==null )     
        sel_category_post="0"

    if (this.selected_wh=='ทั้งหมด' || this.selected_wh==null )     
        sel_wh_post="0"
    
    if (this.selected_type_rp=='ทั้งหมด' || this.selected_type_rp==null )     
          sel_type_rp_post=""

          
    console.log('select_date_post =>',select_date_post);          

    // connect API 
    // this.sv_vStockDaily.getListReport(sel_wh_post
    //                                   ,sel_category_post
    //                                   ,sel_brand_post
    //                                   ,sel_type_rp_post
    //                                   ,select_date_post
    //                                   ).subscribe(response =>{this._vstockcard_list = response;});

   
    // Hide spinner 
    setTimeout(() => {
      // Once the loading is complete, set isLoading back to false
      this.numberOfUnreadAlerts=0
    }, 2000); // Adjust the timeout value as per your requirement
    
  }

}
