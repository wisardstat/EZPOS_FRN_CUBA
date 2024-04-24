import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class models {
  
  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()

  constructor(private httpClient: HttpClient) { }
  
  getList(){    
    var url = this.url+ 'model/list?skip=0&limit='+this.limit
    return this.httpClient.get(url);
  }


  getModelList_byBrand(group_id,brand_id){    
    
    var url = this.url+ 'model/list/ByBrand?group_id='+group_id+'&brand_id='+brand_id+'&skip=0&limit='+this.limit
    return this.httpClient.get(url);

  }

}
