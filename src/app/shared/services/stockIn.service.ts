import { Injectable } from '@angular/core';
import * as data from '../data/tasks/task';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
}