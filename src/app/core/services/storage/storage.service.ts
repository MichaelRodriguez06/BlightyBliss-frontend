import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
/**
 Servicio encarado del almacenamiento en cookies
 */
export class StorageService {

  constructor(private cookieService:CookieService) {

  }

  setCookie(name: string, value: any){
    this.cookieService.set(name,value);
  }

  getCookie(name: string): any{
    return this.cookieService.get(name);
  }

  deleteCookie(name: string){
    this.cookieService.delete(name);
  }

  deleteAll(){
    this.cookieService.deleteAll();
  }

  ngOnInit(): void {
  }
}
