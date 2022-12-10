import { Component, OnInit } from '@angular/core';
import {Certificate} from "../../models/certificate";
import {Table} from "primeng/table";
import {EditCertificateComponent} from "../edit-certificate/edit-certificate.component";
import {MatDialog} from "@angular/material/dialog";

export interface FolderItem {
  studentName: string,
  docnumber: number,
  examLevel: string,
  certificateState: string,
  deliveredDate: string,
  act:string,
  fol:string
}
const COLUMNS_SCHEMA = [
  {
    field: "studentName",
    header: "StudentName"
  }, {
    field: "docnumber",
    header: "Number"
  }, {
    field: "examLevel",
    header: "Level"
  }, {
    field: "certificateState",
    header: "CertificateState"
  }, {
    field: "deliveredDate",
    header: "DeliveredDate"
  }, {
    field: "act",
    header: "Act"
  }, {
    field: "fol",
    header: "Fol"
  }

]


@Component({
  selector: 'app-view-general-certificates',
  templateUrl: './view-general-certificates.component.html',
  styleUrls: ['./view-general-certificates.component.scss',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class ViewGeneralCertificatesComponent implements OnInit {

  columnsSchema: any = COLUMNS_SCHEMA;
  certificateList: Certificate[] = [];
  certificate: Certificate = {studentName: "", docnumber: 0, examLevel: "", certificateState: "", deliveredDate: "", act: "", fol: ""}
  isAdmin: boolean=false;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  public getStatusName(certificate: Certificate): string {
    if (certificate.certificateState == 'P') {
      return 'Earring';
    }else if(certificate.certificateState == 'R'){
      return 'Ready';
    }
    return 'Delivered';
  }

  createEditCertificatePanel() {
    const dialogRef = this.dialog.open(EditCertificateComponent, {
      width: '60%',
      height: '70%',
      data: {edit: false}
    });
  }
}
