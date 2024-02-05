import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class vstockcard_list {
  
   
  constructor(private httpClient: HttpClient) { }
  
  getListAll(){
    var url = 'http://127.0.0.1:8000/v1/vstockcard/?skip=0&limit=10';
    return this.httpClient.get(url);
  }

  getListReport(_brand_id:string){    
    var url = 'http://localhost:8000/v1/vstockcard/report?brand_id='+ _brand_id +'&skip=0&limit=100';

    console.log('url >> ',url);
    return this.httpClient.get(url);

  }

}
