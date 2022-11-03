import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {AppRoutes} from "../app-routes";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("ERROR INTERCEPTOR");
    return next.handle(request)
      .pipe(tap({
        next: res => {
          console.log(res)
        },
        error: err => {
          console.log(err)
          if (err instanceof HttpErrorResponse) {
            this.handleError(err);
          }
        }
      }));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.status)
    switch (err.status) {
      case 0:
        this.router.navigate([AppRoutes.UNKNOWN_ERROR_PAGE])
        break;
      case 404:
        this.router.navigate([AppRoutes.NOT_FOUND_PAGE])
        break;
      case 500:
        this.router.navigate([AppRoutes.INTERNAL_SERVER_ERROR_PAGE])
        break;
    }
  }
}
