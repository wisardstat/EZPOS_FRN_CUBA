import { Component } from '@angular/core';

import { category_list } from '../../../../shared/services/categpry.service'
import { inventory_list } from '../../../../shared/services/inventory.service'
import { brand_list } from '../../../../shared/services/brand.service'
import { stockIn } from '../../../../shared/services/stockIn.service'

import { models } from '../../../../shared/services/model.service'
import { StockInRequest, StockItem, SupplierDetail } from '../str-interface/stock-in-request.model'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-str-create',
  templateUrl: './str-create.component.html',
  styleUrls: ['./str-create.component.scss']
})

export class StrCreateComponent {

  public _category_list: any;
  public _brand_list: any;
  public _model_list: any;

  public selected_category: any;
  public selected_brand: any;
  public brand_new: string;
  public selected_model: any;

  vendor_id: string = "S000";
  wh_id: string = "W001";
  cc_id: string = "A01"
  doc_type_name: string = "รับเข้าเพื่อขาย"
  DOC_STATUS: string = "Y"
  type_doc: string = "1"

  supply_name: string;
  supply_addr: string;
  supply_tel: string;
  supply_tax_id: string
  color: string;
  qty: number;
  cost: number = 0;
  barcode: string;

  supplierDetail: SupplierDetail;
  stockItem: StockItem;
  itemList: StockItem[] = [];

  constructor(
    private inventory_list_sv: inventory_list,
    private category_list_sv: category_list,
    private brand_list_sv: brand_list,
    private models_sv: models,
    private stockIn_sv: stockIn
  ) {
  }


  ngOnInit() {

    this.category_list_sv.getValue().subscribe(response => { this._category_list = response; });
    this.brand_list_sv.getValue().subscribe(response => { this._brand_list = response; });
    this.models_sv.getList().subscribe(response => { this._model_list = response; });

  }

  onKeyDownEvent(event: any) {
    this.brand_new = event.target.value;
  }

  addItem() {
    this.stockItem = {
      doc_type_name: this.doc_type_name,
      color: this.color,
      bar_code: this.barcode,
      pd_name: this.selected_brand.brand_name + this.selected_brand.brand_name + this.color,
      group_id: this.selected_category.group_id,
      brand_id: this.selected_brand.brand_id,
      model_id: this.selected_model.model_id,
      group_name: this.selected_category.group_name,
      brand_name: this.selected_brand.brand_name,
      model_name: this.selected_model.model_name,
      cost: this.cost,
      qty: this.qty,
      UEDIT: "UEDIT",
      DEDIT: "DEDIT",
      cc_id: this.cc_id,
    }
    this.itemList.push(this.stockItem);
    console.log("addItem")
    console.log(this.itemList)
  }

  removeItem(index: number) {
    this.itemList.splice(index, 1);
    console.log("removeItem")
    console.log(this.itemList)
  }

  resetProductDetailForm() {
    this.selected_category = "เลือก";
    this.selected_brand = "เลือก";
    this.selected_model = "เลือก";
    this.brand_new = '';
    this.color = '';
    this.cost = 0;
    this.qty = null;
    this.barcode = '';
  }

  resetStockInForm() {
    window.location.reload();
  }


  saveStock() {

    if (this.itemList.length > 0) {
      this.supplierDetail = {
        supply_id: this.vendor_id,
        supply_name: this.supply_name,
        supply_addr: this.supply_addr,
        supply_addr1: '',
        supply_addr2: '',
        supply_postcode: '',
        supply_tel: this.supply_tel,
        supply_tax_id: this.supply_tax_id,
        user_id: '',
        user_contact: '',
        user_date: '',
        cc_id: this.cc_id
      };

      const stockData: StockInRequest = {
        wh_id: this.wh_id,
        vendor_name: this.supply_name,
        vendor_id: this.vendor_id,
        cc_id: this.cc_id,
        vendor_tel: this.supply_tel,
        vendor_addr1: this.supply_addr,
        vendor_addr2: '',
        type_doc: this.type_doc,
        DOC_STATUS: this.DOC_STATUS,
        itemList: this.itemList,
        supplierDetail: this.supplierDetail
      }

      console.log("saveStock")
      console.log(stockData)
      this.stockIn_sv.saveStockIn(stockData).subscribe(response => {
        if (response.status == "success") {
          alert("บันทึกสำเร็จ")
        } else if (response.status == "alert") {
          alert(response.message)
        } else {
          alert(response.message)
        }
      });
    } else {
      alert("กรุณา เพิ่มรายการสินค้าที่รับเข้า (Item-List)")
    }
  }

}
