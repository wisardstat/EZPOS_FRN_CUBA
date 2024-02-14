import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})

export class vStockCard {

  public api_row_limit = String(environment.api_row_limit);
  constructor(private httpClient: HttpClient) { }

  getListAll() {
    var url = 'http://127.0.0.1:8000/v1/vstockcard/?skip=0&limit=10';
    return this.httpClient.get(url);
  }


  getListByDoc(
    _doc_date_st: string
    ,_doc_date_en: string
    , _wh_id: string
    , _type_doc_id: string) {

    var url = (`http://localhost:8000/v1/vstockcard/getListByDoc?`
      + `doc_date_st=` + _doc_date_st
      + `&doc_date_en=` + _doc_date_en
      + `&wh_id=` + _wh_id
      + `&type_doc_id=` + _type_doc_id
      + `&skip=0&limit=` + this.api_row_limit);

    console.log('url >> ', url);
    return this.httpClient.get(url);

  }


  getListByDocTotal(
    _doc_date_st: string
    ,_doc_date_en: string
    , _wh_id: string
    , _type_doc_id: string) {

    var url = (`http://localhost:8000/v1/vstockcard/getListByDoc_Total?`
      + `doc_date_st=` + _doc_date_st
      + `&doc_date_en=` + _doc_date_en
      + `&wh_id=` + _wh_id
      + `&type_doc_id=` + _type_doc_id
      + `&skip=0&limit=` + this.api_row_limit);

    console.log('url >> ', url);
    return this.httpClient.get(url);

  }
}
