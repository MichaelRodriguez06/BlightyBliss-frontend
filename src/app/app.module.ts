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
import { SideNavigationBarComponent } from './components/side-navegation-bar/side-navigation-bar.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { ErrorPageComponent } from './components/ErrorPages/error-page/error-page.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { CreateFilesComponent } from './components/create-files/create-files.component';
import { FolderViewComponent } from './components/forder-view/folder-view.component';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';
import { CookieService } from "ngx-cookie-service";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {FileManagementComponent} from "./components/file-management/file-management.component";
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import {CoreModule} from "./core/core.module";
import { PendingFilesComponent } from './components/pending-files/pending-files.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { ViewStudentInformationComponent } from './components/view-student-information/view-student-information.component';
import { ExamTryComponent } from './components/exam-try/exam-try.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatGridListModule} from "@angular/material/grid-list";
import {TabMenuModule} from "primeng/tabmenu";
import {StepsModule} from "primeng/steps";

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
    FileManagementComponent,
    CreateFolderComponent,
    ViewDocumentComponent,
    PendingFilesComponent,
    ViewStudentsComponent,
    ExamTryComponent
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
    MatStepperModule,
    MatGridListModule,
    TabMenuModule,
    StepsModule
  ],
  providers: [
    CookieService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
