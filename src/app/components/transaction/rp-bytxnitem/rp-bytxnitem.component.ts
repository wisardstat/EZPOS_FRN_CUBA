import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Observable } from 'rxjs';

// ****  Service  *****
import { vStockCard } from '../../../shared/services/vstockcard.service'
import { inventory_list } from '../../../shared/services/inventory.service'
import { brand_list } from '../../../shared/services/brand.service'
import { category_list } from '../../../shared/services/categpry.service'
import { type_doc } from '../../../shared/services/type_doc.service'
import { models } from '../../../shared/services/model.service'

import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-rp-bytxnitem',
  templateUrl: './rp-bytxnitem.component.html',
  styleUrls: ['./rp-bytxnitem.component.scss']
})
export class RpBytxnitemComponent {

  public _vstockcard_list: any;
  public _inventory_list: any;
  public _category_list: any;
  public _brand_list: any;
  public _typedoc_list: any;
  public _model_list: any;

  public _show_filter_card:boolean=true;
  public _label_btn_hide_filtercard:string="ซ่อนตัวกรอง";

  public _QtyAll: any;
  public api_row_limit = String(environment.api_row_limit);
  //public tableItem$: Observable<StockcardDB[]>;

  public selected_category: string;
  public selected_brand: string;
  public selected_model: string;
  public selected_wh: string;
  public selected_type_rp: string;
  public selected_typeDoc: string;
  public select_date_st: string;
  public select_date_en: string;
  public find_cust_name: string;
  public find_pdname: string;

  public LoadingShow: number;


  public stockQtyAll = {
    title: "จำนวนสินค้าทั้งหมด",
    colorClass: "warning",
    icon: "new-order",
    orders: "0",
  };

  public stockCountSKU = {
    title: "จำนวนเลขที่เอกสาร",
    colorClass: "warning",
    icon: "new-order",
    orders: "0",
  };

  public stockCost = {
    title: "ต้นทุนรวม",
    colorClass: "warning",
    icon: "new-order",
    orders: "0",
  };

  public stockQtyZero = {
    title: "ยอดขายรวม",
    colorClass: "warning",
    icon: "new-order",
    orders: "0",
  };

  constructor(
    private sv_vStockCard: vStockCard,
    private inventory_list_sv: inventory_list,
    private category_list_sv: category_list,
    private brand_list_sv: brand_list,
    private type_doc_sv: type_doc,
    private models_sv: models,
  ) {
    // this.products = productDB.product;
  }


  ngOnInit() {

    // this.vstockcard_list_sv.getListAll().subscribe(response => {this._vstockcard_list = response;});
    this.inventory_list_sv.getValue().subscribe(response => { this._inventory_list = response; });
    this.category_list_sv.getValue().subscribe(response => { this._category_list = response; });
    this.brand_list_sv.getValue().subscribe(response => { this._brand_list = response; });
    this.models_sv.getList().subscribe(response => { this._model_list = response; });
    this.type_doc_sv.getList().subscribe(response => { this._typedoc_list = response; });

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


  public resetFind() {
    // Set default control search
    this.selected_wh = 'W001'
    this.selected_typeDoc = "0"
    this.selected_category = "ทั้งหมด"
    this.selected_brand = this.selected_category
    this.find_cust_name = ""
    this.find_pdname = ""

    const today = new Date(2024, 1, 13);
    this.select_date_st = this.formatDate(today)
    this.select_date_en = this.formatDate(today)
    this.LoadingShow = 0

    // run search 
    this.onSearch();
  }


  public onSearch() {

    // Show spinner 
    this.LoadingShow = 1

    console.log('Clicked onSearch');

    // Get value from control search 
    var sel_brand_post = this.selected_brand
    var sel_model_post = this.selected_model
    var sel_category_post = this.selected_category
    var find_pdname_post = this.find_pdname

    var sel_wh_post = this.selected_wh
    var selected_typeDoc_post = this.selected_typeDoc
    var find_cust_name_post = this.find_cust_name
    var select_date_st_post = this.formatDate(new Date(this.select_date_st));//this.formatDate(this.select_date)
    var select_date_en_post = this.formatDate(new Date(this.select_date_en));//this.formatDate(this.select_date)
    var sel_model_post = "0"
    // Case Select all row 

    if (this.selected_wh == 'ทั้งหมด' || this.selected_wh == null)
      sel_wh_post = "0"

    if (this.selected_typeDoc == 'ทั้งหมด' || this.selected_typeDoc == null)
      selected_typeDoc_post = ""


    if (this.selected_brand == 'ทั้งหมด' || this.selected_brand == null) {
      sel_brand_post = "0"
      this.selected_brand = "ทั้งหมด"
    }

    if (this.selected_category == 'ทั้งหมด' || this.selected_category == null) {
      sel_category_post = "0"
      this.selected_category = "ทั้งหมด"
    }

    if (this.selected_model == 'ทั้งหมด' || this.selected_model == null) {
      sel_model_post = "0"
      this.selected_model = "ทั้งหมด"
    }

    if (this.find_cust_name == null) {
      find_cust_name_post = ""
    }

    if (this.find_pdname == null) {
      find_pdname_post = ""
    }

    // connect API 
    this.sv_vStockCard.getListByItem(select_date_st_post
      , select_date_en_post
      , sel_wh_post
      , selected_typeDoc_post
      , sel_category_post
      , sel_brand_post
      , sel_model_post
      , find_cust_name_post
      , find_pdname_post
    ).subscribe(response => {
      this._vstockcard_list = response;
      setTimeout(() => { this.LoadingShow = 0 }, 1000);
    });

    this.sv_vStockCard.getListByItem_Total(
      select_date_st_post
      , select_date_en_post
      , sel_wh_post
      , selected_typeDoc_post
      , sel_category_post
      , sel_brand_post
      , sel_model_post
      , find_cust_name_post
      , find_pdname_post
    ).subscribe(response => {
      this._QtyAll = response;
      if (this._QtyAll != null) {
        
        this.stockQtyAll.orders = String(this._QtyAll['qty_abs'].toLocaleString('en-US'))
        this.stockCountSKU.orders = String(this._QtyAll['count'].toLocaleString('en-US'))
        this.stockCost.orders = String(this._QtyAll['amt_cost'].toLocaleString('en-US'))
        this.stockQtyZero.orders = String(this._QtyAll['amt_price'].toLocaleString('en-US'))
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

}
