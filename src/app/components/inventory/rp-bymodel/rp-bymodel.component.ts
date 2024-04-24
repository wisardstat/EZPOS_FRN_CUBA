import { Component, OnInit } from '@angular/core';
 
// ****  Service  *****
import { vStockDaily } from '../../../shared/services/vStockDaily.service'
import { inventory_list } from '../../../shared/services/inventory.service'
import { brand_list } from '../../../shared/services/brand.service'
import { category_list } from '../../../shared/services/categpry.service'
import { environment } from '../../../../environments/environment'

// import { STOCKCARDDB,StockcardDB } from '../../../shared/data/tables/stockcard';

@Component({
  selector: 'app-rp-bymodel',
  templateUrl: './rp-bymodel.component.html',
  styleUrls: ['./rp-bymodel.component.scss']
})

export class RpBymodelComponent implements OnInit{  
   
  public _vstockcard_list: any;
  public _inventory_list:any;
  public _category_list:any;
  public _brand_list:any;

  public _show_filter_card:boolean=true;
  public _label_btn_hide_filtercard:string="ซ่อนตัวกรอง";

  public _QtyAll: any;
  public api_row_limit = String(environment.api_row_limit);  
  //public tableItem$: Observable<StockcardDB[]>;

  public selected_category: string;
  public selected_brand: string;
  public selected_wh: string;
  public selected_type_rp: string;
  public select_date : string;
  public find_pdname: string;

  public LoadingShow: number;


  public stockQtyAll = {
    title: "จำนวนสินค้าทั้งหมด",
    colorClass: "warning",
    icon: "new-order",
    orders: "389k",
  };

  public stockCountSKU = {
    title: "จำนวนรายการสินค้า(SKU)",
    colorClass: "warning",
    icon: "new-order",
    orders: "0",
  };

  public stockCost = {
    title: "มูลค่ารวมสินค้าทั้งหมด",
    colorClass: "warning",
    icon: "new-order",
    orders: "0",
  };

  public stockQtyZero = {
    title: "รายการที่ไม่มีสินค้าคงเหลือ",
    colorClass: "warning",
    icon: "new-order",
    orders: "0",
  };

  constructor(
    private sv_vStockDaily:vStockDaily,
    private inventory_list_sv:inventory_list,
    private category_list_sv:category_list,
    private brand_list_sv:brand_list,
    ) {
    // this.products = productDB.product;
  }

  
  ngOnInit() { 

  
    // this.vstockcard_list_sv.getListAll().subscribe(response => {this._vstockcard_list = response;});
    this.inventory_list_sv.getValue().subscribe(response => {this._inventory_list = response;});
    this.category_list_sv.getValue().subscribe(response => {this._category_list = response;});
    this.brand_list_sv.getValue().subscribe(response => {this._brand_list = response;});
     
    this.resetFind();
    // run search 
    this.onSearch();

  }

 
  public formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
    //return `${day}-${month}-${year}`;
  }

  public resetFind()
  {
    // Set default control search
    this.selected_wh = 'W001'
    this.selected_type_rp = ""
    this.selected_category = "ทั้งหมด"
    this.selected_brand = this.selected_category    
    this.find_pdname = ""
    const today = new Date(2024, 1, 13);
    this.select_date = this.formatDate(today)
    this.LoadingShow = 0

    // run search 
    this.onSearch();
  }
  public onSearch(){

    // Show spinner 
    this.LoadingShow=1
    
    console.log('Clicked onSearch');
    console.log('selected_brand =>', this.selected_brand);
    console.log('selected_category =>', this.selected_category);
    console.log('selected_wh =>', this.selected_wh);
    console.log('selected_type_rp =>', this.selected_type_rp);    
    console.log('select_date =>', this.select_date);
    console.log('find_pdname =>', this.find_pdname);
    
    // Get value from control search 
    var  sel_brand_post = this.selected_brand
    var  sel_category_post = this.selected_category
    var  sel_wh_post       = this.selected_wh
    var  sel_type_rp_post  = this.selected_type_rp
    var  find_pdname_post  = this.find_pdname
    var  select_date_post  = this.formatDate(new Date(this.select_date));//this.formatDate(this.select_date)
    var  sel_model_post ="0"
    // Case Select all row 
    if (this.selected_brand=='ทั้งหมด' || this.selected_brand==null)     
        sel_brand_post="0"

    if (this.selected_category=='ทั้งหมด' || this.selected_category==null )     
        sel_category_post="0"

    if (this.selected_wh=='ทั้งหมด' || this.selected_wh==null )     
        sel_wh_post="0"
    
    if (this.selected_type_rp=='ทั้งหมด' || this.selected_type_rp==null )     
          sel_type_rp_post=""

    if (this.find_pdname == null) {
            find_pdname_post = ""
        }
          
    console.log('select_date_post =>',select_date_post);          

    // connect API 
    this.sv_vStockDaily.getListByModel(sel_wh_post
                                      ,sel_category_post
                                      ,sel_brand_post
                                      ,sel_type_rp_post
                                      ,select_date_post
                                      ,find_pdname_post
                                      ).subscribe(response =>{
                                                                this._vstockcard_list = response;
                                                                setTimeout(() => { this.LoadingShow = 0 }, 1000);
                                                              });

    this.sv_vStockDaily.getListByItem_totalQty(sel_wh_post
          , sel_category_post
          , sel_brand_post
          , sel_model_post
          , sel_type_rp_post
          , select_date_post
          ,find_pdname_post
        ).subscribe(response => {
          this._QtyAll = response;
          if (this._QtyAll != null) {
            console.log(this._QtyAll)
            this.stockQtyAll.orders = String(this._QtyAll['qty'].toLocaleString('en-US'))
            this.stockCountSKU.orders = String(this._QtyAll['pd_count'].toLocaleString('en-US'))
            this.stockCost.orders = String(this._QtyAll['cost'].toLocaleString('en-US'))
            this.stockQtyZero.orders = String(this._QtyAll['qty_zero'].toLocaleString('en-US'))
          }
        });

    
  }

  
  public HideFilterCard(){
    
    this._show_filter_card = !this._show_filter_card
    if (this._show_filter_card )
      {
        this._label_btn_hide_filtercard="ซ่อนตัวกรอง"
      }
      else{
        this._label_btn_hide_filtercard="แสดงตัวกรอง"
      }
  }

  // changeFn(val) {
  //   console.log("Dropdown selection:", val);
  // }

}