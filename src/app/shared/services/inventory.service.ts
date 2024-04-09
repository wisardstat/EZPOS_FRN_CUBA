import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class inventory_list {

  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()
  
     
  constructor(private httpClient: HttpClient) { }
  
  getValue(){
    return this.httpClient.get(this.url+'warehouse/');
  }

}
