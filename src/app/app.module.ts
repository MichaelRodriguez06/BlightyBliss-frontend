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
import { ForderViewComponent } from './components/forder-view/forder-view.component';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';
import {FileManagementComponent} from "./components/file-management/file-management.component";
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterStudentComponent,
    ConfirmationDialogComponent,
    TopNavegationBarComponent,
    ErrorPageComponent,
    RecoverPasswordComponent,
    CreateFilesComponent,
    ForderViewComponent,
    FileManagementComponent,
    CreateFolderComponent,
    ViewDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
