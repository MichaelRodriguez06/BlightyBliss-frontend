import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ApiAccessService} from "../app/modules/access/services/api-access.service";
import {Observable} from "rxjs";
import {HttpResponse} from "../app/core/models/httpResponse";
import {SalePromise} from "../app/models/salePromise";

const headers = {
  'Content-Type': 'application/json',
  'x-token': ''
};

@Injectable({
  providedIn: 'root'
})
export class SalePromisesService {

  url = `${environment.apiUrl}/salePromises`;

  constructor(
    private http: HttpClient,
    private accessService: ApiAccessService
  ) {
  }

  createSalePromise(salePromise: SalePromise): Observable<HttpResponse<SalePromise>> {
    headers['x-token'] = this.accessService.userAccessData.token
    const userSellerId = salePromise.userSellerId
    const userBuyerId = salePromise.userBuyerId
    const productId = salePromise.productId
    return this.http.post<HttpResponse<SalePromise>>(this.url+`/${userSellerId}/${userBuyerId}/${productId}`, salePromise,{headers});
  }

  getUserPromises(id: number, role:string): Observable<HttpResponse<SalePromise>>{
    headers['x-token'] = this.accessService.userAccessData.token
    if (role === "seller" || role === "buyer")
      return this.http.get<HttpResponse<SalePromise>>(this.url+`/${id}/${role}`, {headers})
    throw new Error("Role debe ser buyer o seller")
  }
}
