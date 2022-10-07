import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterAccountComponent} from "./components/register-account/register-account.component";
//import {AuthGuard} from "../security/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'admin',
    loadChildren: () => import('./components/admin-page/admin-page.module').then(x => x.AdminPageModule)
    //canLoad: [AuthGuard]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register-account', component: RegisterAccountComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
