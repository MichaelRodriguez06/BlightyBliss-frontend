import { Component, OnInit } from '@angular/core';
import {Certificate} from "../../models/certificate";
import {Table} from "primeng/table";

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
  styleUrls: ['./view-general-certificates.component.scss']
})
export class ViewGeneralCertificatesComponent implements OnInit {

  columnsSchema: any = COLUMNS_SCHEMA;
  certificateList: Certificate[] = [];
  certificate: Certificate = {studentName: "", docnumber: 0, examLevel: "", certificateState: "", deliveredDate: "", act: "", fol: ""}

  constructor() { }

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
}
