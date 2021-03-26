import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {  SaleModel } from '../models/salemodel';

@Injectable({
  providedIn: 'root'
})
export class SalePostService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Sales';
  }

  getSales(): Observable<SaleModel[]> {
    return this.http.get<SaleModel[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getSale(id: number): Observable<SaleModel> {
    return this.http.get<SaleModel>(this.myAppUrl + this.myApiUrl + "/" +id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  

  saveSales(salePost): Observable<SaleModel> {
    return this.http.post<SaleModel>(this.myAppUrl + this.myApiUrl, JSON.stringify(salePost), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateSales(id: number, salePost): Observable<SaleModel> {
    return this.http.put<SaleModel>(this.myAppUrl + this.myApiUrl  + "/" + id, JSON.stringify(salePost), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteSales(id: number): Observable<SaleModel> {
    return this.http.delete<SaleModel>(this.myAppUrl + this.myApiUrl  + "/"+  id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
