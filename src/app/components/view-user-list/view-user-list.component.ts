import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentService} from "../../modules/Students/services/student.service";
import {NotificationService} from "../../core/services/notification/notification.service";
import {MatTableDataSource} from "@angular/material/table";
import {Table} from "primeng/table";
import {RegisterAccountComponent} from "../register-account/register-account.component";
import {Account} from "../../models/account";
import {AccountService} from "../services/AccountService/account.service";
import {GetAccountsService} from "../services/GetAccounts/get-accounts.service";
import {MatPaginator} from "@angular/material/paginator";
import {AccountTemplate} from "../../models/AccountTemplate";

const COLUMNS_SCHEMA = [
  {
    field: "personName",
    header: "Name"
  }, {
    field: "mail",
    header: "Mail"
  }, {
    field: "type",
    header: "Type"
  },
  {
    field: "account_status",
    header: "Status"
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
  accountList: AccountTemplate[] = [];
  account: AccountTemplate = {
    idAccount: 0, email: '', idPerson: 0, personDocument: '', personName: '', status: '', type: ''
  }
  dataSource = new MatTableDataSource<AccountTemplate>(this.accountList);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private dialog: MatDialog,
              private getAccountsService: GetAccountsService,
              private notification: NotificationService
  ) {
    this.getAccountsService.getAccounts().subscribe(data => {
      this.accountList = data.data
      console.log(data.message);
      this.dataSource.data = this.accountList;
      console.log("Esta dataaaa: " + this.accountList)
    })

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

  private updateView() {
    this.dataSource.data = this.accountList;
  }

}
