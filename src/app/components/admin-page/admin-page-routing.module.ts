import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from "./admin-page.component";
import {AppRoutes} from "../../core/services/app-routes";
import {RegisterStudentComponent} from "../register-student/register-student.component";
import {FolderViewComponent} from "../folder-view/folder-view.component";
import {OptionsManagementComponent} from "../options-management/options-management.component";
import {PendingFilesComponent} from "../pending-files/pending-files.component";
import {ViewStudentsComponent} from "../view-students/view-students.component";
import {ViewStudentInformationComponent} from "../view-student-information/view-student-information.component";
import {ViewUserListComponent} from "../view-user-list/view-user-list.component";
import {ViewGeneralCertificatesComponent} from "../view-general-certificates/view-general-certificates.component";

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {path: '', component: ViewUserListComponent},
      {path: AppRoutes.REGISTER_STUDENT, component: RegisterStudentComponent},
      {path: AppRoutes.FOLDER_VIEW, component: FolderViewComponent},
      {path: AppRoutes.FILE_MANAGEMENT , component: OptionsManagementComponent},
      {path: AppRoutes.PENDING_FILES, component: PendingFilesComponent},
      {path: AppRoutes.VIEW_STUDENTS, component: ViewStudentsComponent},
      {path: AppRoutes.VIEW_STUDENT_INFORMATION, component: ViewStudentInformationComponent},
      {path: AppRoutes.VIEW_ACCOUNT_LIST, component: ViewUserListComponent},
      {path: AppRoutes.GENERAL_CERTIFICATES, component: ViewGeneralCertificatesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {
}
