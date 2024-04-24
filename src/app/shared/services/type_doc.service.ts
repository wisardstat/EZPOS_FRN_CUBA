import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class type_doc {
  
  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()
   
  constructor(private httpClient: HttpClient) { }
  
  getList(){
    return this.httpClient.get(this.url+'type_doc/getList/');
  }

}
