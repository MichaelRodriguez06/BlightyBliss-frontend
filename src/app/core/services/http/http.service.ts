import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  private static formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.url}/${path}`, { params })
      .pipe(catchError(HttpService.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.url}/${path}`,
      JSON.stringify(body)
    ).pipe(catchError(HttpService.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.url}/${path}`,
      JSON.stringify(body)
    ).pipe(catchError(HttpService.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(
      `${this.url}/${path}`,
      JSON.stringify(body)
    ).pipe(catchError(HttpService.formatErrors));
  }
}
