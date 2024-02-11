import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Injectable({
    providedIn: 'root'
})

export class vstockcard_list {
  
  public api_row_limit = String(environment.api_row_limit); 
  constructor(private httpClient: HttpClient) { }
  
  getListAll(){
    var url = 'http://127.0.0.1:8000/v1/vstockcard/?skip=0&limit=10';
    return this.httpClient.get(url);
  }

  getListReport(_wh_id:string,_category_id:string,_brand_id:string,_type_rp:string){    

    var url = ( `http://localhost:8000/v1/vstockcard/report?`
              +`brand_id=`+ _brand_id 
              +`&categoty_id=`+_category_id
              +`&wh_id=`+_wh_id
              +`&type_rp=`+_type_rp
              +`&skip=0&limit=`+this.api_row_limit);

    console.log('url >> ',url);
    return this.httpClient.get(url);

  }

}
