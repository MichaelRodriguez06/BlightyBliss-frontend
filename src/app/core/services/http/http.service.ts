import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpResponse} from "../../models/httpResponse";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {

  url = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<HttpResponse<T>> {
    return this.http.get<HttpResponse<T>>(`${this.url}/${path}`, {params})
      .pipe(catchError(HttpService.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<HttpResponse<T>> {
    return this.http.put<HttpResponse<T>>(
      `${this.url}/${path}`,
      JSON.stringify(body)
    ).pipe(catchError(HttpService.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<HttpResponse<T>> {
    return this.http.post<HttpResponse<T>>(
      `${this.url}/${path}`,
      JSON.stringify(body),
      httpOptions
    ).pipe(catchError(HttpService.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<HttpResponse<T>> {
    return this.http.patch<HttpResponse<T>>(
      `${this.url}/${path}`,
      JSON.stringify(body)
    ).pipe(catchError(HttpService.formatErrors));
  }
}
