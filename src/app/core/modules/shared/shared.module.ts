import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modulos Material
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {ToastrModule} from "ngx-toastr";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RatingModule} from "primeng/rating";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import { StepsModule } from "primeng/steps";
import {TabViewModule} from "primeng/tabview";
import {PanelModule} from "primeng/panel";
import  {SelectButtonModule} from "primeng/selectbutton";
import {CalendarModule} from "primeng/calendar";
import {MatStepperModule} from "@angular/material/stepper";
import {MatGridListModule} from "@angular/material/grid-list";
import {TabMenuModule} from "primeng/tabmenu";
import {ChipsModule} from "primeng/chips";
import {PasswordModule} from "primeng/password";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CheckboxModule} from "primeng/checkbox";
import {MatTabsModule} from "@angular/material/tabs";
import {ChartModule} from "primeng/chart";
import {MatTableExporterModule} from "mat-table-exporter";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      timeOut:1500
    }),
    //PRIME NG MODULES
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule  ,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    StepsModule,
    TabViewModule,
    PanelModule,
    SelectButtonModule,
    CalendarModule,
    MatStepperModule,
    MatGridListModule,
    TabMenuModule,
    ChipsModule,
    PasswordModule,
    AutoCompleteModule,
    CheckboxModule,
    MatTabsModule,
    ChartModule,
    MatTableExporterModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    //PRIME NG MODULES
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    StepsModule,
    TabViewModule,
    PanelModule,
    SelectButtonModule,
    CalendarModule,
    MatStepperModule,
    MatGridListModule,
    TabMenuModule,
    ChipsModule,
    PasswordModule,
    AutoCompleteModule,
    CheckboxModule,
    MatTabsModule,
    ChartModule,
    MatTableExporterModule
  ]
})
export class SharedModule { }
