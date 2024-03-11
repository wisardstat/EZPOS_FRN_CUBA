import { Component } from '@angular/core';

import { vStockCard } from '../../../../shared/services/vstockcard.service'
import { inventory_list } from '../../../../shared/services/inventory.service'
import { environment } from '../../../../../environments/environment'



@Component({

  selector: 'app-str-list',
  templateUrl: './str-list.component.html',
  styleUrls: ['./str-list.component.scss']

})

export class StrListComponent {

  public _vstockcard_list: any;
  public _inventory_list:any;  

  public _QtyAll: any;
  public api_row_limit = String(environment.api_row_limit);  
  //public tableItem$: Observable<StockcardDB[]>;
  
  public selected_wh: string;
  public select_date_st : string;
  public select_date_en : string;
  public find_cust_name: string;
  
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
    private sv_vStockCard:vStockCard,
    private inventory_list_sv:inventory_list,
    
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


}
