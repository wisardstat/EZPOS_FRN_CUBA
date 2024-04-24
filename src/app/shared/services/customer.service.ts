import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
})

export class customer {
  
  public url :string = environment.api_url
  public limit :string = "10" //environment.api_row_limit.toString()

  constructor(private httpClient: HttpClient) { }
  
  getList(){    
    var url = this.url+ 'customer/list?skip=0&limit='+this.limit
    return this.httpClient.get(url);
  }


  getSingleById(cust_id){    
    
    var url = this.url+ 'customer/id?cust_id='+cust_id
    return this.httpClient.get(url);

  }

  getListByFname(cust_fname){    
    
    var url = this.url+ 'customer/Fname?cust_fname='+cust_fname
    return this.httpClient.get(url);

  }

}
