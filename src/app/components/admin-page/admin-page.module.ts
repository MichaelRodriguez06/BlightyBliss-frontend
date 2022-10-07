import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from "./admin-page.component";
import {ListUserPageComponent} from "./list-user-page/list-user-page.component";
import {AdminPageRoutingModule} from "./admin-page-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    AdminPageComponent,
    ListUserPageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    SharedModule,
    AppModule
  ]
})
export class AdminPageModule {
}
