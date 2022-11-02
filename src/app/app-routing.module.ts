import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterStudentComponent} from "./components/register-student/register-student.component";
import {ErrorPageComponent} from "./components/ErrorPages/error-page/error-page.component";
import {ForderViewComponent} from "./components/forder-view/forder-view.component";
import {FileManagementComponent} from "./components/file-management/file-management.component";
import {AppRoutes} from "./core/services/app-routes";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: AppRoutes.ADMIN_PAGE,
    loadChildren: () => import('./components/admin-page/admin-page.module').then(m => m.AdminPageModule)
    //canLoad: [AuthGuard]
  },
  {path: AppRoutes.LOGIN_PAGE, component:LoginComponent},
  {path:'regist-student', component:RegisterStudentComponent},
  {path:'forder-view', component: ForderViewComponent},
  {path:'file-management', component: FileManagementComponent},
  {path: AppRoutes.NOT_FOUND_PAGE, component: ErrorPageComponent,
    data: {errorMessage: '404', message: 'This page is not available at this time'}
  },
  {path: AppRoutes.INTERNAL_SERVER_ERROR_PAGE, component: ErrorPageComponent,
    data: {errorMessage: '500', message: 'A server error has occurred'}
  },
  {path: AppRoutes.UNKNOWN_ERROR_PAGE, component: ErrorPageComponent,
    data: {errorMessage: 'unknown', message: 'An error has occurred'}
  },
  {path:'**', redirectTo:AppRoutes.NOT_FOUND_PAGE , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
