import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class type_doc {
  
  private url = 'http://127.0.0.1:8000/v1/type_doc/getList/';
   
  constructor(private httpClient: HttpClient) { }
  
  getList(){
    return this.httpClient.get(this.url);
  }

}
