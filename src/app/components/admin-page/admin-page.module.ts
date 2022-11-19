import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from "./admin-page.component";
import {ListUserPageComponent} from "./list-user-page/list-user-page.component";
import {AdminPageRoutingModule} from "./admin-page-routing.module";
import {SharedModule} from "../../core/modules/shared/shared.module";
import {RegisterAccountComponent} from "../register-account/register-account.component";
import {AccountRegisterFormComponent} from "../register-account/account-register-form/account-register-form.component";
import {CoreModule} from "../../core/core.module";
import {ViewStudentInformationComponent} from "../view-student-information/view-student-information.component";

@NgModule({
  declarations: [
    AdminPageComponent,
    ListUserPageComponent,
    RegisterAccountComponent,
    AccountRegisterFormComponent,
    ViewStudentInformationComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AdminPageModule {
}
