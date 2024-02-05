import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class brand_list {
  
  private url = 'http://127.0.0.1:8000/v1/brand/';
   
  constructor(private httpClient: HttpClient) { }
  
  getValue(){
    return this.httpClient.get(this.url);
  }

}
