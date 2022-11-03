import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpService} from "./services/http/http.service";
import {SideNavigationBarComponent} from "../components/side-navegation-bar/side-navigation-bar.component";
import {SharedModule} from "./modules/shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "./services/interceptors/error.interceptor";
import {CookieService} from "ngx-cookie-service";
import {NotificationService} from "./services/notification/notification.service";
import {AdminPageRoutingModule} from "../components/admin-page/admin-page-routing.module";

@NgModule({
  declarations: [
    SideNavigationBarComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        AdminPageRoutingModule
    ],
  exports: [
    SideNavigationBarComponent
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    CookieService,
    NotificationService
  ]
})
export class CoreModule {
}
