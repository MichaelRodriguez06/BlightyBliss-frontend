import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentService} from "../../modules/Students/services/student.service";
import {NotificationService} from "../../core/services/notification/notification.service";
import {MatTableDataSource} from "@angular/material/table";
import {Table} from "primeng/table";
import {RegisterAccountComponent} from "../register-account/register-account.component";
import {Account} from "../../models/account";

const COLUMNS_SCHEMA = [
  {
    field: "complete_name",
    header: "name"
  }, {
    field: "account_mail",
    header: "mail"
  }, {
    field: "account_type",
    header: "type"
  },
  {
    field: "account_status",
    header: "status"
  }
]

@Component({
  selector: 'app-view-user-list',
  templateUrl: './view-user-list.component.html',
  styleUrls: ['./view-user-list.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class ViewUserListComponent implements OnInit {

  value1: string = "Id";
  columnsSchema: any = COLUMNS_SCHEMA;
  accountList: Account[] = [];
  account: { account_type: number; complete_name: string; account_mail: number;account_status:string } = {complete_name: "", account_mail: 0, account_type: 0,account_status: ""}
  dataSource = new MatTableDataSource<Account>(this.accountList);

  constructor(private dialog: MatDialog,
              private studentService: StudentService,
              private notification: NotificationService
  ) {
  }

  ngOnInit(): void {
  }

  createUserPanel() {
    const dialogRef = this.dialog.open(RegisterAccountComponent, {
      width: '50%',
      height: '55%',
      data: {edit: false}
    });

  }


  createEditPanel() {

  }

  createDeletePanel() {

  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  private updateView(){
    this.dataSource.data = this.accountList;
  }

}
