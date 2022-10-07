import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from "./admin-page.component";
import {ListUserPageComponent} from "./list-user-page/list-user-page.component";

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {path: '', component: ListUserPageComponent},
      {path: 'listu', component: ListUserPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {
}
