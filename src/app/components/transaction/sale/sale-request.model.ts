
export interface SaleHeader {
    doc_id?: string;
    doc_date:string;
    wh_id: string;
    user_id?: string;
    UEDIT?: string;
    DEDIT?: string;    
    cc_id: string;    
    itemList: Customer[];
    supplierDetail: SaleDetail;    
  }
  
  export interface SaleDetail {    
    bar_code: string;
    group_name: string;    
    pd_name?: string;
    cost?: number;
    price?: number;
    qty?: number;
    qty_limit?: number;
    UEDIT?: string;
    DEDIT?:string
    pay_type?: string;    
    cc_id: string;
    disable: boolean;
    group_emei: string;
  }
  
  export interface Customer {
    cust_id?: string; 
    cust_fname?: string; 
    cust_addr1: string;
    cust_addr2: string;
    cust_tel?: string; 
    tax_id?: string;     
    cc_id: string;    
  }


  