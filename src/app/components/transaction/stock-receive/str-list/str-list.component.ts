import { Component } from '@angular/core';

import { vStockCard } from '../../../../shared/services/vstockcard.service'
import { inventory_list } from '../../../../shared/services/inventory.service'
import { stockIn } from '../../../../shared/services/stockIn.service'
import { environment } from '../../../../../environments/environment'

import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({

  selector: 'app-str-list',
  templateUrl: './str-list.component.html',
  styleUrls: ['./str-list.component.scss']

})

export class StrListComponent {
  
  public _vstockcard_list: any;
  public _inventory_list:any; 
  
  public _show_filter_card: boolean = true;
  public _label_btn_hide_filtercard: string = "ซ่อนตัวกรอง";

  public _QtyAll: any;
  public api_row_limit = String(environment.api_row_limit);  
  //public tableItem$: Observable<StockcardDB[]>;
  
  public selected_wh: string;
  public select_date_st : string;
  public select_date_en : string;
  public find_cust_name: string;
  
  public LoadingShow: number;

  public doc_id : string = "A01-SI211010011"
  public cc_id : string = "A01"
  public stockinList :any
  public stockinListDetail :any
  public doc_date : Date
  public wh_id : string
  public wh_name : string
  public vendor_name : string
  public vendor_addr : string
  public vendor_tel : string

  public DetailTotalQty : number
  public DetailTotalAmt : number

  closeResult: string;

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
    private sv_vStockCard:vStockCard,
    private inventory_list_sv:inventory_list,
    private modalService: NgbModal,
    private sv_stockIn:stockIn,    
    ) {
    // this.products = productDB.product;
  }

  
  ngOnInit() { 

    // this.vstockcard_list_sv.getListAll().subscribe(response => {this._vstockcard_list = response;});
    this.inventory_list_sv.getValue().subscribe(response => {this._inventory_list = response;});
    
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
    this.find_cust_name = ""
    const today = new Date(2024,1,13);
    this.select_date_st = this.formatDate(today)
    this.select_date_en = this.formatDate(today)
    this.LoadingShow = 0
 
    // run search 
    this.onSearch();
  }
 

  public onSearch(){

    // Show spinner 
    this.LoadingShow=1
    
    console.log('Clicked onSearch');
        
    // Get value from control search 

    var  sel_wh_post       = this.selected_wh    
    var  find_cust_name_post  = this.find_cust_name
    var  select_date_st_post  = this.formatDate(new Date(this.select_date_st));//this.formatDate(this.select_date)
    var  select_date_en_post  = this.formatDate(new Date(this.select_date_en));//this.formatDate(this.select_date)
    var  sel_model_post ="0"
    var selected_typeDoc_post ="SI"
    // Case Select all row 
 
    if (this.selected_wh=='ทั้งหมด' || this.selected_wh==null )     
        sel_wh_post="0"
    
    if (this.find_cust_name == null) {
        find_cust_name_post = ""
        }
                

    // connect API 
    this.sv_vStockCard.getListByDoc(  select_date_st_post
                                      ,select_date_en_post
                                      ,sel_wh_post                                                                            
                                      ,selected_typeDoc_post 
                                      ,find_cust_name_post                              
                                      ).subscribe(response =>{
                                                                this._vstockcard_list = response;
                                                                setTimeout(() => { this.LoadingShow = 0 }, 1000);
                                                              });

    this.sv_vStockCard.getListByDocTotal(
                                          select_date_st_post
                                          ,select_date_en_post
                                          ,sel_wh_post                                                                            
                                          ,selected_typeDoc_post   
                                          ,find_cust_name_post                                   
                                        ).subscribe(response => {
                                          this._QtyAll = response;
                                          if (this._QtyAll != null) {
                                            console.log(this._QtyAll)
                                            
                                            this.stockQtyAll.orders = String(this._QtyAll['qty'].toLocaleString('en-US'))
                                            this.stockCountSKU.orders = String(this._QtyAll['count'].toLocaleString('en-US'))
                                            this.stockCost.orders = String(this._QtyAll['amt_cost'].toLocaleString('en-US'))
                                            this.stockQtyZero.orders = String(this._QtyAll['amt_price'].toLocaleString('en-US'))
                                          }
                                        });

    
  }

  public HideFilterCard() {

    this._show_filter_card = !this._show_filter_card
    if (this._show_filter_card) {
      this._label_btn_hide_filtercard = "ซ่อนตัวกรอง"
    }
    else {
      this._label_btn_hide_filtercard = "แสดงตัวกรอง"
    }
    
  }  

  open_model(content,_doc_id) {

    console.log("_doc_id= "+_doc_id)      

    this.Show_DocumentDetail(_doc_id);

    this.modalService.open(content, { size: 'xl'  }).result.then((result) => {

      console.log("modalService - result ")      
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      console.log("modalService - reason ")      
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });


  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  Show_DocumentDetail(_doc_id){

      this.sv_stockIn.get_StockInHead(_doc_id,this.cc_id).subscribe(response => {

          console.log("Load - get_StockInHead ")      
          
          this.doc_id = response['doc_id'];
          this.doc_date = response['doc_date'];
          this.wh_id = response['wh_id'];
          this.wh_name = response['wh_name'];
          this.vendor_name = response['vendor_name'];
          this.vendor_addr = response['vendor_addr1'];
          this.vendor_tel = response['vendor_tel'];
      });

      this.sv_stockIn.get_StockInDetail(_doc_id,this.cc_id).subscribe(response => {
          
          this.stockinListDetail = response
          this.DetailTotalQty = 0
          this.DetailTotalAmt = 0

          for (let i = 0; i < Object.keys(response).length; i++) {
            console.log((response[i].qty * response[i].cost))   

            this.DetailTotalQty  += response[i].qty
            this.DetailTotalAmt += (response[i].qty * response[i].cost)
          }

          
      });

  }

}
