import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {UserFormPageComponent} from "./components/general/user-form-page/user-form-page.component";
import {ConfirmationDialogComponent} from "./components/general/confirmation-dialog/confirmation-dialog.component";
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { TopNavegationBarComponent } from './components/top-navegation-bar/top-navegation-bar.component';
import { SideNavegationBarComponent } from './components/side-navegation-bar/side-navegation-bar.component';
import { AccountRegisterFormComponent } from './components/account-register-form/account-register-form.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import {TopNavegationBarComponent} from "./components/top-navegation-bar/top-navegation-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserFormPageComponent,
    ConfirmationDialogComponent,
    RegisterStudentComponent,
    TopNavegationBarComponent

    ConfirmationDialogComponent,
    RegisterAccountComponent,
    TopNavegationBarComponent,
    SideNavegationBarComponent,
    AccountRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
