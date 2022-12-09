import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./core/modules/shared/shared.module";
import {RouterModule} from "@angular/router";
import {ConfirmationDialogComponent} from "./components/general/confirmation-dialog/confirmation-dialog.component";
import { TopNavegationBarComponent } from './components/top-navegation-bar/top-navegation-bar.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { ErrorPageComponent } from './components/ErrorPages/error-page/error-page.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { CreateFilesComponent } from './components/create-files/create-files.component';
import { FolderViewComponent } from './components/folder-view/folder-view.component';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';
import { CookieService } from "ngx-cookie-service";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {OptionsManagementComponent} from "./components/options-management/options-management.component";
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import {CoreModule} from "./core/core.module";
import { PendingFilesComponent } from './components/pending-files/pending-files.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { ExamTryComponent } from './components/exam-try/exam-try.component';
import { ViewUserListComponent } from './components/view-user-list/view-user-list.component';
import { PendingFileAsignationComponent } from './components/pending-file-asignation/pending-file-asignation.component';
import { ViewGeneralCertificatesComponent } from './components/view-general-certificates/view-general-certificates.component';
import { EditCertificateComponent } from './components/edit-certificate/edit-certificate.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { AgreementCreateComponent } from './components/agreement-crud/agreement-create.component';
import { ReportStudentsComponent } from './components/report-students/report-students.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmationDialogComponent,
    RegisterStudentComponent,
    TopNavegationBarComponent,
    ConfirmationDialogComponent,
    TopNavegationBarComponent,
    ErrorPageComponent,
    RecoverPasswordComponent,
    CreateFilesComponent,
    FolderViewComponent,
    OptionsManagementComponent,
    CreateFolderComponent,
    ViewDocumentComponent,
    PendingFilesComponent,
    ViewStudentsComponent,
    ExamTryComponent,
    ViewUserListComponent,
    PendingFileAsignationComponent,
    ViewGeneralCertificatesComponent,
    EditCertificateComponent,
    UserInformationComponent,
    AgreementCreateComponent,
    ReportStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonToggleModule,
    CoreModule,
  ],
  providers: [
    CookieService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
