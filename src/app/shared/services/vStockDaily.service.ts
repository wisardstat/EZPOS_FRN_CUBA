import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class vStockDaily {

  public api_row_limit = String(environment.api_row_limit);

  constructor(private httpClient: HttpClient) { }

  // http://127.0.0.1:8000/v1/stockDailys/GroupByModel?skip=0&limit=100

  getListAll() {
    var url = 'http://127.0.0.1:8000/v1/vstockcard/?skip=0&limit=10';
    return this.httpClient.get(url);
  }

  getListByModel( _wh_id: string
                , _category_id: string
                , _brand_id: string
                , _type_rp: string
                , _stock_date: string
                , _find_pdname: string
                ) {


    var url = (`http://localhost:8000/v1/stockDailys/GroupByModel?`
      + `brand_id=` + _brand_id
      + `&categoty_id=` + _category_id
      + `&wh_id=` + _wh_id
      + `&type_rp=` + _type_rp
      + `&stock_date=` + _stock_date
      + `&find_pdname=` + _find_pdname
      + `&skip=0&limit=1000`);

    console.log('url >> ', url);
    return this.httpClient.get(url);

  }

  getListByItem(_wh_id: string
    , _category_id: string
    , _brand_id: string
    , _model_id: string
    , _type_rp: string
    , _stock_date: string
    , _find_pdname: string
    ) {

    var url = (`http://localhost:8000/v1/stockDailys/GroupByItem?`
      + `brand_id=` + _brand_id
      + `&categoty_id=` + _category_id
      + `&wh_id=` + _wh_id
      + `&model_name=` + _model_id
      + `&type_rp=` + _type_rp
      + `&stock_date=` + _stock_date
      + `&find_pdname=` + _find_pdname
      + `&skip=0&limit=`+ this.api_row_limit);

    console.log('url >> ', url);
    return this.httpClient.get(url);

  }

  getListByItem_totalQty(_wh_id: string
    , _category_id: string
    , _brand_id: string
    , _model_id: string
    , _type_rp: string
    , _stock_date: string
    , _find_pdname: string
    ) {

    var url = (`http://localhost:8000/v1/stockDailys/GroupByItem_totalQty?`
      + `brand_id=` + _brand_id
      + `&categoty_id=` + _category_id
      + `&wh_id=` + _wh_id
      + `&model_name=` + _model_id
      + `&type_rp=` + _type_rp
      + `&stock_date=` + _stock_date
      + `&find_pdname=` + _find_pdname
      + `&skip=0&limit=`+this.api_row_limit);

    console.log('url >> ', url);
    return this.httpClient.get(url);

  }
}
