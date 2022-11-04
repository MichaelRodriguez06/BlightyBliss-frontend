import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../models/user";
import {UsersServices} from "../../../../services/users.services";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {tap} from "rxjs";
import {RecoverPasswordComponent} from "../../recover-password/recover-password.component";
import {ConfirmationDialogComponent} from "../../general/confirmation-dialog/confirmation-dialog.component";

const COLUMNS_SCHEMA = [
  {
    key: "document",
    label: "Documento"
  }, {
    key: "document_type",
    label: "Tipo"
  }, {
    key: "full_name",
    label: "Nombre"
  }, {
    key: "credentialId",
    label: "Correo"
  }, {
    key: "phone_number",
    label: "Telefono"
  }, {
    key: "city",
    label: "Ciudad"
  }, {
    key: "address",
    label: "Direccion"
  }, {
    key: "isEdit",
    label: "Acciones"
  }
]

@Component({
  selector: 'app-list-user-page',
  templateUrl: './list-user-page.component.html',
  styleUrls: ['./list-user-page.component.css']
})
export class ListUserPageComponent implements OnInit {

  columnsSchema: any = COLUMNS_SCHEMA;
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  public dataSource: MatTableDataSource<User>;

  constructor(
    private usersService: UsersServices,
    public dialog: MatDialog
  ) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    this.dataSource = new MatTableDataSource<User>();
  }

  ngOnInit(): void {
    this.getUsers()
  }

  create(){
    const dialogRef = this.dialog.open(RecoverPasswordComponent, {
      width: '60%',
      height: '100%',
      data: {edit:false}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result) {
        this.usersService.createUser(result).subscribe((res => {
          console.log(res.message)
          this.getUsers()
        }))
      }
    });
  }

  edit(user: User) {
    console.log(user)
    const dialogRef = this.dialog.open(RecoverPasswordComponent, {
      width: '60%',
      height: '100%',
      data: {edit:true,user:user}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.updateUser(result).subscribe((res => {
          console.log(res.message)
          this.getUsers()
        }))
      }
    });
  }

  delete(email: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: "Estas seguro de que deseas eliminar este usuario? "}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.deleteUser(email).subscribe((res) => {
          console.log(res.message)
          this.getUsers()
        });
      }
    });
  }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      tap(() => this.getUsers())
    ).subscribe()
  }

  getUsers() {
    this.usersService.getUsers().subscribe((response) => {
        this.dataSource = response.data;
    });
  }
}
