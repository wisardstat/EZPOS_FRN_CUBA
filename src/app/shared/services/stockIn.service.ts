import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { json } from 'stream/consumers';

import { environment } from '../../../../src/environments/environment'

@Injectable({
  providedIn: 'root'
})


export class stockIn {

  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()

  constructor(private httpClient: HttpClient) { }

  saveStockIn(request: any): Observable<any> {

    var urlSaveStockIn = this.url+'stockin/add';

    return this.httpClient.post<any>(urlSaveStockIn, request)
      .pipe(
        map(response => {
          console.log('Stock data saved successfully:', response);
          return response; // Return the full response object
        }),
        catchError(error => {
          console.error('Error saving stock data:', error);
          // Handle API errors (e.g., return a default response or throw a custom error)
          return of({ message: 'An error occurred while saving stock data.', error }); // Example error response
        })
      );
  }



  get_BarcodeExists(bar_code: string, group_id: string, cc_id: string): Observable<any> 
  {

    console.log(">> get_BarcodeExists");
 
    var url = this.url+'vstockcard/barcode_exists';
    var response = ""

    const request = {
      bar_code: bar_code,
      group_id: group_id,
      cc_id: cc_id
    }
    var urlX = (this.url+`vstockcard/barcode_exists?`
      + `bar_code=` + bar_code
      + `&group_id=` + group_id
      + `&cc_id=` + cc_id
    );


    return this.httpClient.get(urlX)
    .pipe(
      map(response => {        
        return response; // Return the full response object
      }),
      catchError(error => {
        console.error('>> Error saving stock data:', error);
        // Handle API errors (e.g., return a default response or throw a custom error)
        return of({ message: 'An error occurred while saving stock data.', error }); // Example error response
      })
    );

  }

  get_StockInHead(doc_id: string, cc_id: string)
  {
    var url = this.url+'stock_in/header?doc_id='+doc_id+'&cc_id='+cc_id
    return this.httpClient.get(url);
  }

  get_StockInDetail(doc_id: string, cc_id: string)
  {
    var url = this.url+'stock_in/detail?doc_id='+doc_id+'&cc_id='+cc_id
    return this.httpClient.get(url);
  }


}