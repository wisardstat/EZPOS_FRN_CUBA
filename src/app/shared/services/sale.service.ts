import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { json } from 'stream/consumers';

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})


export class saleService {

  public url :string = environment.api_url
  public limit :string = environment.api_row_limit.toString()

  constructor(private httpClient: HttpClient) { }

  Add_SaleDocument(request: any): Observable<any> {

    var urlSaveStockIn = this.url+'sales/add';

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
 
}