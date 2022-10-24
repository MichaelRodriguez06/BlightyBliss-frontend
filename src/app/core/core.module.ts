import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService} from "./services/http/http.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    HttpService
  ]
})
export class CoreModule { }
