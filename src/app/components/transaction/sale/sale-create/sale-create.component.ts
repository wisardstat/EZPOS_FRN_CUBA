import { Component, Renderer2, OnInit, ViewChild, ElementRef, booleanAttribute } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { customer } from '../../../../shared/services/customer.service'
import { ProductService } from '../../../../shared/services/product.service'
import { saleService } from '../../../../shared/services/sale.service'

import { environment } from '../../../../../environments/environment'
import { SaleHeader, SaleDetail, Customer } from '../../sale/sale-request.model'

import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { NgSelectComponent } from '@ng-select/ng-select';
import { Console, error } from 'console';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.scss']
})
export class SaleCreateComponent {

  public custList: any

  public cust_id: string = ""
  public cust_fname: string = ""
  public cust_sname: string = ""
  public cust_adr1: string = ""
  public cust_adr2: string = ""
  public cust_tel: string = ""
  public tax_id: string = ""
  public comment: string = ""

  public select_doc_date: string

  public barcode: string = "869327079797434"
  public wh_id: string = sessionStorage.getItem('wh_id_default');
  public wh_name: string = sessionStorage.getItem('wh_name_default');

  public user_id: string = sessionStorage.getItem('user_id');
  public user_name: string = sessionStorage.getItem('user_name');
  public cc_id: string = sessionStorage.getItem('cc_id');
  public doc_tax_id: string

  public alert_txt: string

  public input_amt: number[] = [];
  public input_price: Number[] = [];
  public input_qty: Number[] = [];

  public TotalCount :number =0 
  public TotalQty :number =0
  public TotalAmount :number = 0

  public btnCustLabel : string = "กรอกข้อมูลลูกค้า"
  public btnCustHide : boolean = false
  
  public TotalGrand : string = "0"
  public TotalDiscount : string = "0"
  public TotalBeforeTax : string = "0"
  public TotalTax : string = "0"
  public TotalNet : string = "0"

  public DiscountPercent : number = 0
  public DiscountCash : number = 0

  public ReceiveAmt : number = 0
  public ReturnAmtShow : string = "0"
  public ReturnAmt : string = "0"

  public selectPayType : string ="CASH"
  public selectChkPay : string ="Y"
  public selectVATType : string ="NO_VAT"

  public LoadingShow : boolean = true
  public TextboxReadOnly : boolean = false
  public ShowAlert : boolean = false
  public BtnPayDisable : boolean = true

  public CardCount = {
    title: "จำนวนรายการ",
    colorClass: "warning",
    icon: "cart",
    orders: "0",
  };

  public CardQty = {
    title: "จำนวนชิ้น",
    colorClass: "warning",
    icon: "new-order",
    orders:"0",
  };

  public CardAmount = {
    title: "ยอดรวมเงิน",
    colorClass: "warning",
    icon: "profit",
    orders: "0",
  };
  
  SaleHeader: SaleHeader;
  SaleDetail: SaleDetail;
  customer  : customer;
  itemList  : SaleDetail[] = [];

  constructor(
    private sv_customer: customer,
    private sv_product: ProductService,
    private sv_sales: saleService,
    private renderer: Renderer2,
    private modalService: NgbModal,
    
  ) {
    // this.products = productDB.product;
  }

  public formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
    //return `${day}-${month}-${year}`;
  }

  ngOnInit() {

    this.sv_customer.getList().subscribe(response => {
      this.custList = response;
    });

    const today = new Date();
    this.select_doc_date = this.formatDate(today)

    // this.input_price['A'] ="A"
    // this.input_price['B'] ="B"
    // this.input_price['C'] ="C"
    // console.log(this.input_price) 
  }

  get_CustomerInfo(cust_id) {
    console.log('>> Customer getinfo')
    console.log('>> cust_id =' + cust_id)

    this.sv_customer.getSingleById(cust_id).subscribe(
      response => {

        console.log('>> cust_fname =' + response['cust_fname'])

        this.cust_id = response['cust_id'];
        this.cust_fname = response['cust_fname'];
        this.cust_sname = response['cust_sname'];
        this.cust_adr1 = response['cust_adr1'];
        this.cust_adr2 = response['cust_adr2'];
        this.cust_tel = response['cust_tel'];
        this.tax_id = response['tax_id'];

      });
  }

  get_CustomerListByName() {
    //this.cust_fname 
    this.sv_customer.getListByFname(this.cust_fname).subscribe(response => {
      this.custList = response;
    });
  }

  reset_barcode() {
    this.barcode = ""
    this.renderer.selectRootElement('#barcode').focus();
  }

  ResetCustomer(){

    this.cust_id   = ""
    this.cust_fname= ""
    this.cust_sname= ""
    this.cust_adr1 = ""
    this.cust_adr2 = ""
    this.cust_tel  = ""
    this.tax_id    = ""
  }

  ResetDocument()
  {
    this.cust_id   = ""
    this.cust_fname= ""
    this.cust_sname= ""
    this.cust_adr1 = ""
    this.cust_adr2 = ""
    this.cust_tel  = ""
    this.tax_id    = ""
    this.comment   = ""
    const today = new Date();
    this.select_doc_date = this.formatDate(today)

    this.selectPayType ="CASH"
    this.selectChkPay="Y"
    this.selectVATType="NO_VAT"

    this.itemList = [];

    this.CardQty.orders = "0" 
    this.CardCount.orders = "0" 
    this.CardAmount.orders = "0" 
    this.TotalGrand = "0" 

    this.BtnPayDisable = true 

    this.modalService.dismissAll('save_sucess')

  }

  AddItem(modal_alert) {

    console.log(">> AddItem")
    /***  check duplicate  ****/
    var bValid = true
    var bDuplicate = false
    this.TextboxReadOnly = true

    if (this.barcode === "") {      
      this.ShowAlert_BarcodeInput("กรุณาระบุ บาร์โค๊ด/Barcode/Emei")
      // this.modal_open(modal_alert)
      bValid = false
    }
    else if (this.barcode.length < 5) {      
      this.ShowAlert_BarcodeInput("ความยาวตัวอักษรของ บาร์โค๊ด/Barcode/Emei น้อยกว่า 5 หลัก")
      // this.modal_open(modal_alert)
      bValid = false
    }

    var _barcode = ""
    var _DupIndex = ""

    for (var index in this.itemList) {      

      _barcode = this.itemList[index].bar_code      
      console.log("loop >> " + _barcode)

      if (this.barcode ===_barcode ) {

         if (this.itemList[index].group_emei == "Y") {          
          this.ShowAlert_BarcodeInput("มีรายการซ้ำซ้อน พบ " + this.barcode + " ในรายการแล้ว !!")
          // this.modal_open(modal_alert)
          // alert(this.alert_txt)
          console.log(this.alert_txt)
          bValid = false
        }
        else {
          console.log("bDuplicate is true!!")
          bDuplicate = true     
          _DupIndex = index    
        }      
      }      
    }

    console.log(">> bValid = "+bValid)

    if (bValid) {

      this.sv_product.getSingleByBarcode(this.barcode, this.wh_id , this.cc_id).subscribe(
        response => {

          console.log(">> getSingleByBarcode ")          
          console.log(">> bDuplicate = "+bDuplicate)
          // VIVO  Y12A - green
          if (response['pd_id'] !== null) {

            if (!bDuplicate) {

                  var _qty = Number( response['qty'])
                  if (_qty === 0)
                  {
                    console.error("Qty == 0 ")
                    var _msg = this.barcode +" "+response['pd_name']+" ไม่มีจำนวนสินค้าอยู่ในคลัง/ร้าน (Qty=0)";
                    this.ShowAlert_BarcodeInput(_msg)
                    // this.modal_open(modal_alert)                     
                  }
                  else 
                  {
                      var input_disable = false
                      if (response['group_emei'] == "Y") {
                        input_disable = true
                      }

                      var price = response['price1']
                      if (response['price1'] === 0) {
                        price = response['cost']
                      }

                      this.input_price[this.barcode] = price
                      this.input_qty[this.barcode] = "1"
                      this.input_amt[this.barcode] = Number(this.input_qty[this.barcode]) * Number(this.input_price[this.barcode])

                      this.SaleDetail = {                
                        bar_code: this.barcode,
                        group_name: response['group_name'],
                        pd_name: response['pd_name'].replace('  ', '').replace('  -  ', ' - '),
                        cost: response['cost'],
                        price: price,
                        qty: 1,
                        qty_limit: response['qty'],
                        UEDIT: this.user_id,                
                        cc_id: this.cc_id,
                        disable: input_disable,
                        group_emei: response['group_emei'],
                      }

                      this.itemList.push(this.SaleDetail);
                      this.barcode = '';
                  }
            }
            else {
              this.input_qty[this.barcode] = Number(this.input_qty[this.barcode])+1
              this.input_amt[this.barcode] = Number(this.input_qty[this.barcode]) * Number(this.input_price[this.barcode])              
              this.itemList[_DupIndex].qty = this.input_qty[this.barcode]              
              this.barcode = '';              
            }

            this.BtnPayDisable = false 
            this.UpdateCard()  
            this.renderer.selectRootElement('#barcode').focus();
          }
          else {
            console.error("Barcode " + this.barcode + " is Undefine")            
            //this.modal_open(modal_alert)
            var _msg = "ไม่พบบาร์โค๊ด/Barcode/Emei " + this.barcode + "  ในระบบ";
            this.ShowAlert_BarcodeInput(_msg)

          }
        });
    }   

    this.TextboxReadOnly = false
  }

  ShowAlert_BarcodeInput(_msg){

        console.log(_msg);      
        this.alert_txt = _msg
        this.ShowAlert =true  

        setTimeout(() => {
                            this.ShowAlert =false    
                          }, 3000);  
  }

  UpdateCard()
  {
    //console.log(this.itemList)
    this.TotalCount =0 
    this.TotalQty =0 
    this.TotalAmount =0 

    for (var index in this.itemList) {

        var qty = Number(this.itemList[index].qty)
        var price = Number(this.itemList[index].price)
        var amt = Number(qty*price)

        this.TotalCount += 1
        this.TotalQty += qty
        this.TotalAmount += amt
    }

    this.CardQty.orders = String(this.TotalQty.toLocaleString('en-US')) 
    this.CardCount.orders =  String(this.TotalCount.toLocaleString('en-US'))   
    this.CardAmount.orders =  String(this.TotalAmount.toLocaleString('en-US'))  
    this.TotalGrand = String(this.TotalAmount.toLocaleString('en-US')) 
  }

  removeItem(index: number) {
    this.itemList.splice(index, 1);
    console.log("removeItem")
    //console.log(this.itemList)
    this.UpdateCard()
  }

  /************ Model ************** */
  closeResult: string;
  modal_open(content,size="md") {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title','size':size }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }
  /************ ./ Model ************** */

  test_addbarcode(barcode) {
    this.barcode = barcode
  }

  update_item_price() {

    this.TotalCount =0 
    this.TotalQty =0 
    this.TotalAmount =0 

    for (var index in this.itemList) {
      var _barcode = this.itemList[index].bar_code
      console.log("loop >> " + _barcode)

      this.itemList[index].price = Number(this.input_price[_barcode])
      this.itemList[index].qty = Number(this.input_qty[_barcode])

      var qty = Number(this.itemList[index].qty)
      var price = Number(this.itemList[index].price)
      var amt = qty*price
      this.TotalCount += 1
      this.TotalQty += qty
      this.TotalAmount += amt
    }

    this.CardQty.orders = String(this.TotalQty.toLocaleString('en-US')) 
    this.CardCount.orders =  String(this.TotalCount.toLocaleString('en-US'))   
    this.CardAmount.orders =  String(this.TotalAmount.toLocaleString('en-US'))  

    this.TotalGrand = String(this.TotalAmount.toLocaleString('en-US')) 
    
  }

  Keyup_inputQty(_barcode) {

    this.input_amt[_barcode] = Number(this.input_qty[_barcode]) * Number(this.input_price[_barcode])
    this.update_item_price()
  }

  BtnCustClick(){
    this.btnCustHide = !this.btnCustHide
    if (this.btnCustHide)
      {
        this.btnCustLabel="แสดงข้อมูลลูกค้า"
      }
      else {
        this.btnCustLabel="ซ่อนข้อมูลลูกค้า"
      }
  

  }

  ShowPay(modal){

      this.modal_open(modal,'xl')
      this.Calculate_TotalNet()
      this.Calculate_ReceiveAmt()
      this.ReceiveAmt=null
      this.renderer.selectRootElement('#ReceiveAmt').focus();

  }


  Calculate_TotalNet(){

    var _TotalDiscountPercent = (this.TotalAmount * (this.DiscountPercent/100))
    var _TotalDiscount  = Number( _TotalDiscountPercent+ this.DiscountCash)

    this.TotalDiscount = String(_TotalDiscount.toLocaleString('en-US'))  

    this.TotalBeforeTax = String((this.TotalAmount - _TotalDiscount).toLocaleString('en-US'))  
    this.TotalTax = "0" 
    this.TotalNet = String((this.TotalAmount - _TotalDiscount + Number(this.TotalTax )).toLocaleString('en-US'))


  }

  Calculate_ReceiveAmt(){

      var _TotalNet = Number(this.TotalNet.replace(',',''))
      var _result =  this.ReceiveAmt - _TotalNet
      if (_result<0)
        {          
          this.ReturnAmtShow = "ขาดเงิน  "+  String(Math.abs(_result).toLocaleString('en-US'))
        }
        else if (_result>0)
        {
          this.ReturnAmtShow = "ทอนเงิน  "+  String(Math.abs(_result).toLocaleString('en-US'))
        }
        else {
          this.ReturnAmtShow =  String(Math.abs(_result).toLocaleString('en-US'))
        }
      
        this.ReturnAmt = _result.toString()
  }

  SaveInvoice(modal_success,modal_alert)
  {
    console.log(" >> Save Invoice ")
    this.modalService.dismissAll("alert_warning")
    this.LoadingShow = false

    if (this.itemList.length > 0) {

      console.log("this.cust_fname=" + this.cust_fname)

      if (this.cust_fname == "") {
          this.cust_fname = "ไม่ระบุ"
          this.cust_id = "C000"        
          console.log(">> cust_id is empty!!")
      }

      console.log(">> this.ReceiveAmt")
      console.log(this.ReceiveAmt)
      if ( (this.ReceiveAmt===undefined) || (this.ReceiveAmt===null)) {
        this.ReceiveAmt = Number(this.TotalNet.replace(',',''))
        console.log(this.ReceiveAmt)
      }

      const customerRequest = {        
        cust_id : this.cust_id, 
        cust_fname: this.cust_fname,
        cust_addr1: this.cust_adr1,
        cust_addr2: this.cust_adr2,
        cust_tel: this.cust_tel,
        tax_id: this.tax_id,
        cc_id: this.cc_id
      }

      const SaleHeaderRequest = {
        doc_id: "",
        doc_date: this.select_doc_date,
        wh_id: this.wh_id,
        user_id: this.user_id,
        UEDIT: this.user_id,
        
        cc_id: this.cc_id,
        cmm : this.comment,

        GrandTotal:  Number(this.TotalGrand.replace(',','')) ,
        discount:  Number(this.TotalDiscount.replace(',','')),
        discount_pers: Number( this.DiscountPercent),
        discount_cash: Number( this.DiscountCash),
        TotalBeforeTax: Number( this.TotalBeforeTax.replace(',','')),
        total: Number( this.TotalNet.replace(',','')) ,

        doc_type: "RT",
        chk_pay: this.selectChkPay,
        pay_type: this.selectPayType,

        cash_receive: Number( this.ReceiveAmt),
        cash_return: Number( this.ReturnAmt.replace(',','')),

        PRINT_VAT_TYPE: this.selectVATType,
        
        itemList: this.itemList,
        customerDetail: customerRequest,    
      }

      // console.error(SaleHeaderRequest)
      // console.error(this.itemList[0])

            
      this.sv_sales.Add_SaleDocument(SaleHeaderRequest).subscribe(response => {
        
        this.LoadingShow = true
        this.modalService.dismissAll('save_sucess')

        if (response.status == "success") {          

          this.alert_txt = "บันทึกข้อมูลเรียบร้อย / Save Successfull "                    
          this.ResetDocument();
          this.modal_open(modal_success)

        } else if (response.status == "alert") {          

          this.alert_txt = response.message
          this.modal_open(modal_alert)
          
        } else {
          alert(response.message)
        }
      }); 
      
    }
  }

  
  printToSlip(printSectionId: string){
    console.log('Print')
    let popupWinindow
    let innerContents = document.getElementById(printSectionId).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=900,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="../style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

}

