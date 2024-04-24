import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class users {
  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()
  
  constructor(private httpClient: HttpClient) { }
  
  getList(){    
    var url = this.url+'user/list?skip=0&limit='+this.limit
    return this.httpClient.get(url);
  }


  getSingle(_user,_password){    

    var url = this.url+'user/single?user='+_user+'&password='+_password
    return this.httpClient.get(url);

  }

  getBranchList(_user_id){    

    var url = this.url+'user/branch?user_id='+_user_id
    return this.httpClient.get(url);

  }

}
