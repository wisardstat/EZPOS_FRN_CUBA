import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class models {
  
  constructor(private httpClient: HttpClient) { }
  
  getList(){    
    var url = 'http://127.0.0.1:8000/v1/model/list?skip=0&limit=10000'
    return this.httpClient.get(url);
  }

}
