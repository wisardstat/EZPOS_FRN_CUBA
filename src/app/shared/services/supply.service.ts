import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class supplys {
  
  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()

  constructor(private httpClient: HttpClient) { }
  
  getList_findname(find_name){  

    var url = this.url+'supply/list?find_name='+find_name+'&skip=0&limit='+this.limit
    return this.httpClient.get(url);
  }


  getSingle_byId(Supply_id){    

    var url = this.url+'supply/single?Supply_id='+Supply_id
    return this.httpClient.get(url);

  }


}
