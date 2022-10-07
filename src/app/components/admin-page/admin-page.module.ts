import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPageComponent} from "./admin-page.component";
import {ListUserPageComponent} from "./list-user-page/list-user-page.component";
import {AdminPageRoutingModule} from "./admin-page-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        AdminPageComponent,
        ListUserPageComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        AdminPageRoutingModule,
        SharedModule
    ]
})
export class AdminPageModule { }
