import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from "./admin-page.component";
import {RegisterAccountComponent} from "../register-account/register-account.component";
import {AppRoutes} from "../../core/services/app-routes";

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {path: '', component: RegisterAccountComponent},
      {path: AppRoutes.REGISTER_ACCOUNT, component: RegisterAccountComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {
}
