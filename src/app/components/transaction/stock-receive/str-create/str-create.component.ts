import { Component,Renderer2,OnInit, } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

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

export class StrCreateComponent implements OnInit{

  public _category_list: any;
  public _brand_list: any;
  public _model_list: any;

  public selected_category: any;
  public selected_brand: any;
  public brand_new: string;
  public selected_model: any;
  
  public alert_txt: string = ""

  public wh_id: string = "W001";
  public cc_id: string = "A01"
  public doc_type_name: string = "รับเข้าเพื่อขาย"
  public DOC_STATUS: string = "Y"
  public type_doc: string = "1"

  public vendor_id: string = "" ;
  public supply_name: string="";
  public supply_addr: string="";
  public supply_tel: string="";
  public supply_tax_id: string="";
  public color: string="";
  public qty: number;
  public cost: number = 0;
  public barcode: string;

  closeResult: string;
  
  supplierDetail: SupplierDetail;
  stockItem: StockItem;
  itemList: StockItem[] = [];

  constructor(
    private inventory_list_sv: inventory_list,
    private category_list_sv: category_list,
    private brand_list_sv: brand_list,
    private models_sv: models,
    private stockIn_sv: stockIn,
    private renderer: Renderer2,
    private modalService: NgbModal,
    
  ) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  

  ngOnInit() {

    this.category_list_sv.getValue().subscribe(response => { this._category_list = response; });
    this.brand_list_sv.getValue().subscribe(response => { this._brand_list = response; });
    this.models_sv.getList().subscribe(response => { this._model_list = response; });
    
    this.qty = 1;
  }

  onKeyDownEvent(event: any) {
    this.brand_new = event.target.value;
  }

  addItem(modal_alert) {
    
    console.log("addItem")
    console.log(this.selected_category)
    var bEmpty : Boolean = false
    var Label : String =""

    
    if (this.selected_category === undefined)
    {
      bEmpty = true      
      Label = "กรุณาระบุ "+"ประเภทสินค้า"
    }
    else if (this.selected_brand === undefined)
    {
      bEmpty = true      
      Label = "กรุณาระบุ "+"ยี่ห้อสินค้า/Brand"
    }
    else if (this.selected_model === undefined)
    {
      bEmpty = true      
      Label = "กรุณาระบุ "+"รุ่นสินค้า/Model"
    }
    else if (this.barcode === undefined)
    {
      bEmpty = true      
      Label = "กรุณาระบุ "+"เลข Emei/Barcode/บาร์โค๊ด"
    }
    else if (this.barcode.length<5)
    {
      bEmpty = true      
      Label = "ความยาว เลข Emei/Barcode/บาร์โค๊ด น้อยกว่า 5 หลัก"
    }

    if (this.cost === undefined)
    {
      this.cost = 0 
    }

    var _respond =  this.stockIn_sv.get_BarcodeExists(this.barcode,this.selected_category.group_id,this.cc_id)
    
    console.log(">>> respond="+String(_respond))

    if (String(_respond)!=="")
    {
      bEmpty = true    
      Label = String(_respond)
      console.log(">>> Not undefined")
    }


    if (bEmpty===false)
    {
      console.log("+++++ None undefined ++++++")
      this.stockItem = {
        doc_type_name: this.doc_type_name,
        color: this.color,
        bar_code: this.barcode.toUpperCase(),
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
      this.barcode = '';      
      this.renderer.selectRootElement('#barcode_input').focus();    

      console.log("addItem")
      console.log(this.itemList)
    }
    else 
    {
      console.log(Label)
      this.alert_txt = Label+" !!"
      this.open(modal_alert)
    }
 
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

  resetStockInForm(content) {
   // window.location.reload();
         /*********** Reset Form  ************* */
         this.vendor_id =""
         this.supply_name =""
         this.supply_addr =""       
         this.supply_tel =""
         this.supply_tax_id=""
         this.itemList = []

         this.resetProductDetailForm()

         this.modalService.dismissAll(content)
  }


  saveStock(modal_alert) {

    if (this.itemList.length > 0) {

      if (this.supply_name=="")
      {
        this.supply_name = "ไม่ระบุ"
        this.vendor_id =  "S000"
        console.log("this.supply_name="+this.supply_name)
      }
      
      this.supplierDetail = {

        supply_id: this.vendor_id,
        supply_name:  this.supply_name,
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
          //this.resetStockInForm()

        } else if (response.status == "alert") {

          // alert(response.message)
          this.modalService.dismissAll('confirm_save')
          this.alert_txt = response.message
          this.open(modal_alert)

        } else {

          alert(response.message)

        }
      });



    } else {

      // alert("กรุณา เพิ่มรายการสินค้าที่รับเข้า (Item-List)")
      this.modalService.dismissAll('confirm_save')
      this.alert_txt = "กรุณา เพิ่มรายการสินค้าที่รับเข้า (Item-List)"
      this.open(modal_alert)
    }
  }

  NextToInput(input){
    this.renderer.selectRootElement(input).focus();  
    if (input=='#qty')
    {
      this.renderer.selectRootElement(input).value="1";  
    }
    else{
      this.renderer.selectRootElement(input).value="";  
    }
  }



}
