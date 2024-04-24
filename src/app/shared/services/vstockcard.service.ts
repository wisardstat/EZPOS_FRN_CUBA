import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

// import { environment } from '../../../environments/environment'

import { environment } from '../../../../src/environments/environment'


@Injectable({
  providedIn: 'root'
})

export class vStockCard {

  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()

  
  constructor(private httpClient: HttpClient) { }

  getListAll() {    
    
    return this.httpClient.get( this.url+'vstockcard/?skip=0&limit='+this.limit);

  }


  getListByDoc(
      _doc_date_st: string
    , _doc_date_en: string
    , _wh_id: string
    , _type_doc_id: string
    , _find_cust_name: string

    ) {

    var url = (this.url+`vstockcard/getListByDoc?`
      + `doc_date_st=` + _doc_date_st
      + `&doc_date_en=` + _doc_date_en
      + `&wh_id=` + _wh_id
      + `&type_doc_id=` + _type_doc_id
      + `&find_cust_name=` + _find_cust_name
      + `&skip=0&limit=` + this.limit);

    
    return this.httpClient.get(url);

  }


  getListByDocTotal(
      _doc_date_st: string
    , _doc_date_en: string
    , _wh_id: string
    , _type_doc_id: string
    , _find_cust_name: string

    ) {

    var url = (this.url+`vstockcard/getListByDoc_Total?`
      + `doc_date_st=` + _doc_date_st
      + `&doc_date_en=` + _doc_date_en
      + `&wh_id=` + _wh_id
      + `&type_doc_id=` + _type_doc_id
      + `&find_cust_name=` + _find_cust_name
      + `&skip=0&limit=` + this.limit);

    
    return this.httpClient.get(url);

  }


  
  getListByItem(
    _doc_date_st: string
  , _doc_date_en: string
  , _wh_id: string
  , _type_doc_id: string
  , _group_id: string
  , _brand_id: string
  , _model_id: string
  , _find_cust_name: string
  , _find_pd_name: string

  ) {

  var url = (this.url+`vstockcard/getListByItem?`
    + `doc_date_st=` + _doc_date_st
    + `&doc_date_en=` + _doc_date_en
    + `&wh_id=` + _wh_id
    + `&type_doc_id=` + _type_doc_id
    + `&group_id=` + _group_id
    + `&brand_id=` + _brand_id
    + `&model_id=` + _model_id    
    + `&find_cust_name=` + _find_cust_name
    + `&find_pd_name=` + _find_pd_name
    + `&skip=0&limit=` + this.limit);

  
  return this.httpClient.get(url);

}


getListByItem_Total(
  _doc_date_st: string
, _doc_date_en: string
, _wh_id: string
, _type_doc_id: string
, _group_id: string
, _brand_id: string
, _model_id: string
, _find_cust_name: string
, _find_pd_name: string

) {

var url = (this.url+`vstockcard/getListByItem_Total?`
  + `doc_date_st=` + _doc_date_st
  + `&doc_date_en=` + _doc_date_en
  + `&wh_id=` + _wh_id
  + `&type_doc_id=` + _type_doc_id
  + `&group_id=` + _group_id
  + `&brand_id=` + _brand_id
  + `&model_id=` + _model_id    
  + `&find_cust_name=` + _find_cust_name
  + `&find_pd_name=` + _find_pd_name
  + `&skip=0&limit=` + this.limit);


return this.httpClient.get(url);

}

}
