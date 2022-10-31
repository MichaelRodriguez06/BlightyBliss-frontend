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
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { TopNavegationBarComponent } from './components/top-navegation-bar/top-navegation-bar.component';
import { SideNavigationBarComponent } from './components/side-navegation-bar/side-navigation-bar.component';
import { AccountRegisterFormComponent } from './components/account-register-form/account-register-form.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { Error404PageComponent } from './components/ErrorPages/error404-page/error404-page.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { CreateFilesComponent } from './components/create-files/create-files.component';
import { ForderViewComponent } from './components/forder-view/forder-view.component';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';
import { CookieService } from "ngx-cookie-service";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {FileManagementComponent} from "./components/file-management/file-management.component";
import { ViewDocumentComponent } from './components/view-document/view-document.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmationDialogComponent,
    RegisterStudentComponent,
    TopNavegationBarComponent,
    ConfirmationDialogComponent,
    RegisterAccountComponent,
    TopNavegationBarComponent,
    SideNavigationBarComponent,
    AccountRegisterFormComponent,
    Error404PageComponent,
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
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [
    CookieService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
