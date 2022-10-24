import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../environments/environment";
import {StorageService} from "../storage/storage.service";
import {Const} from "../const";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add access header with jwt if user is logged in and request is to the api url
    const account = this.storageService.getCookie(Const.ACCESS_COOKIE);
    const isLoggedIn = account && account.token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${account.token}`
        }
      });
    }
    return next.handle(request);
  }
}
