import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterStudentComponent} from "./components/register-student/register-student.component";
import {RegisterAccountComponent} from "./components/register-account/register-account.component";
//import {AuthGuard} from "../security/auth.guard";

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
  {path:'**', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
