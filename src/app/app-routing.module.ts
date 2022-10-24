import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterStudentComponent} from "./components/register-student/register-student.component";
import {RegisterAccountComponent} from "./components/register-account/register-account.component";
import {Error404PageComponent} from "./components/ErrorPages/error404-page/error404-page.component";
import {ForderViewComponent} from "./components/forder-view/forder-view.component";
//import {AuthGuard} from "../security/access.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'admin',
    loadChildren: () => import('./components/admin-page/admin-page.module').then(m => m.AdminPageModule)
    //canLoad: [AuthGuard]
  },
  {path:'login', component:LoginComponent},
  {path:'register-account', component:RegisterAccountComponent},
  {path:'regist-student', component:RegisterStudentComponent},
  {path:'page-not-found', component: Error404PageComponent},
  {path:'ForderViewComponent', component: ForderViewComponent},
  {path:'**', redirectTo:'/page-not-found', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
