import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Response} from "../app/models/response";
import {HttpClient} from "@angular/common/http";
import {ApiAccessService} from "./apiAccess.service";
import {Product} from "../app/models/product";

const headers = {
  'Content-Type': 'application/json',
  'x-token': ''
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = `${environment.apiUrl}/products`;

  constructor(
    private http: HttpClient,
    private accessService: ApiAccessService
    ) {
  }

  createProduct(product: Product, id: number): Observable<Response> {
    headers['x-token'] = this.accessService.userData.token
    return this.http.post<Response>(this.url+`/${id}`, product,{headers});
  }

  updateProduct(product: Product): Observable<Response>{
    headers['x-token'] = this.accessService.userData.token
    return this.http.put<Response>(this.url+`/${product.id}`, product,{headers});
  }

  deleteProduct(id: number): Observable<Response> {
    headers['x-token'] = this.accessService.userData.token
    return this.http.patch<Response>(this.url+`/${id}`, {},{headers});
  }

  getProduct(id: number): Observable<Response>{
    headers['x-token'] = this.accessService.userData.token
    return this.http.get<Response>(this.url+`/${id}`,{headers});
  }

  getProducts(userId: number): Observable<Response> {
    headers['x-token'] = this.accessService.userData.token
    return this.http.get<Response>(this.url+`/getProductsToBuy/${userId}`, {headers});
  }

  getUserProducts(userId: number): Observable<Response>{
    headers['x-token'] = this.accessService.userData.token
    return this.http.get<Response>(this.url+`/getUsersProduct/${userId}`, {headers})
  }

  getProductsToBuy(userId: number){
    headers['x-token'] = this.accessService.userData.token
    return this.http.get<Response>(this.url+`/getProductsToBuy/${userId}`, {headers})
  }
}
