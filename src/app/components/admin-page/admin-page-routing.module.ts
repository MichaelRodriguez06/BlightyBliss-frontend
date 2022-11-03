import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from "./admin-page.component";
import {RegisterAccountComponent} from "../register-account/register-account.component";
import {AppRoutes} from "../../core/services/app-routes";
import {RegisterStudentComponent} from "../register-student/register-student.component";
import {ForderViewComponent} from "../forder-view/forder-view.component";
import {FileManagementComponent} from "../file-management/file-management.component";
import {PendingFilesComponent} from "../pending-files/pending-files.component";

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {path: '', component: RegisterAccountComponent},
      {path: AppRoutes.REGISTER_ACCOUNT, component: RegisterAccountComponent},
      {path: AppRoutes.REGISTER_STUDENT, component: RegisterStudentComponent},
      {path: AppRoutes.FOLDER_VIEW, component: ForderViewComponent},
      {path: AppRoutes.FILE_MANAGEMENT , component: FileManagementComponent},
      {path: AppRoutes.PENDING_FILES, component: PendingFilesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {
}
