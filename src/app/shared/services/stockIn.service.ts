import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient ,HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { json } from 'stream/consumers';


@Injectable({
    providedIn: 'root'
})


export class stockIn {
    
    private urlSaveStockIn = 'http://127.0.0.1:8000/v1/stockin/add';

    constructor(private httpClient: HttpClient) { }

    saveStockIn(request: any): Observable<any> {

        return this.httpClient.post<any>(this.urlSaveStockIn, request)
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

    get_BarcodeExists (
      bar_code: string
    , group_id: string
    , cc_id: string    
    ) : Observable<any> {

      console.log(">> get_BarcodeExists");

      var url = 'http://localhost:8000/v1/vstockcard/barcode_exists';
      var response = ""

        const request = {
          bar_code: bar_code,
          group_id: group_id,
          cc_id:cc_id
        }
        var urlX = (`http://localhost:8000/v1/vstockcard/barcode_exists?`
        + `bar_code=` + bar_code
        + `&group_id=` + group_id
        + `&cc_id=` + cc_id
        );  

        var url = 'http://localhost:8000/v1/vstockcard/barcode_exists';  
      
        const params = new HttpParams()
        .set('bar_code', bar_code)
        .set('group_id',group_id)
        .set('cc_id',cc_id)
        ;

         
      
    return this.httpClient.get(urlX)
          
      
    

      
       
      
      
       

        /*

        return this.httpClient.post<any>(url, request)
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
      */
    }
}