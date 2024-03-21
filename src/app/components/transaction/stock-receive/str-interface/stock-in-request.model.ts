export interface StockItem {
    doc_id?: string;
    doc_type_name:string;
    bar_code: string;
    pd_id?: string;
    pd_name: string;
    group_id: string;
    brand_id: string;
    model_id: string;
    group_name: string;
    brand_name: string;
    model_name: string;
    color: string;
    cost: number;
    qty: number;
    UEDIT?: string;
    DEDIT?: string;
    cc_id: string;
    status_detail?: string; 
    _pd_code?: string; 
    unit_id?: string;
    lot_no?: string;
    bar_code_receive?: string; 
    qty_receive?: string; 
    cost_receive?: string; 
    STATUS?: string; 
    barcode_recev_change?: string;
  }
  
  export interface SupplierDetail {
    supply_id: string;
    supply_name: string;
    supply_addr?: string;
    supply_addr1?: string;
    supply_addr2?: string;
    supply_tel?: string;
    supply_postcode?: string;
    supply_tax_id?:string
    user_id?: string;
    user_date?: string;
    user_contact?: string;
    cc_id: string;
  }
  
  export interface StockInRequest {
    doc_id?: string; 
    vendor_id?: string; 
    wh_id: string;
    vendor_name: string;
    vendor_addr1?: string; 
    vendor_addr2?: string; 
    vendor_tel: string;
    cc_id: string;
    type_doc: string;
    DOC_STATUS: string;
    itemList: StockItem[];
    supplierDetail: SupplierDetail;
  }


  