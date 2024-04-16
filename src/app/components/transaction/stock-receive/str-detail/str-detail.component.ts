
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { vStockCard } from '../../../../shared/services/vstockcard.service'
import { stockIn } from '../../../../shared/services/stockIn.service'
import { environment } from '../../../../../environments/environment'

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-str-detail',
  templateUrl: './str-detail.component.html',
  styleUrls: ['./str-detail.component.scss']
})
export class StrDetailComponent {

  public doc_id : string = "A01-SI211010011"
  public cc_id : string = "A01"

  public stockinList :any
  public doc_date : Date
  public wh_id : string
  public wh_name : string
  public vendor_name : string
  public vendor_addr : string
  public vendor_tel : string

  public api_row_limit = String(environment.api_row_limit);  

  constructor(    
    private sv_stockIn:stockIn,    
    public router: Router,
    private _Activatedroute:ActivatedRoute
    ) {
    // this.products = productDB.product;
  }

  
  ngOnInit() { 

    console.log("id=", this._Activatedroute.snapshot.paramMap.get("id"));
    this.doc_id = this._Activatedroute.snapshot.paramMap.get("id")
    
    // this.vstockcard_list_sv.getListAll().subscribe(response => {this._vstockcard_list = response;});
    this.sv_stockIn.get_StockInHead(this.doc_id,this.cc_id).subscribe(response => {
      console.log("Load - get_StockInHead ")      
      this.doc_date = response['doc_date'];
      this.wh_id = response['wh_id'];
      this.wh_name = response['wh_name'];
      this.vendor_name = response['vendor_name'];
      this.vendor_addr = response['vendor_addr1'];
      this.vendor_tel = response['vendor_tel'];
    });

    this.sv_stockIn.get_StockInDetail(this.doc_id,this.cc_id).subscribe(response => {
      console.log("stockinList")
      console.log(response)
      
        this.stockinList = response
        
    });
    

  }

  GotoDetail(){
      console.log('GotoDetail==>')
      this.router.navigateByUrl('transaction/transaction_byitem');

  }

}
