import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CreateFolderComponent} from "../create-folder/create-folder.component";
import {FolderService} from "../../modules/Folders/services/folder.service";
import {Folder} from "../../modules/Folders/models/folder";
import {NotificationService} from "../../core/services/notification/notification.service";
import {Table} from "primeng/table";

export interface FolderItem {
  idFolder: number,
  name: string,
  alphabet: string,
  years: string
}

const COLUMNS_SCHEMA = [
  {
    field: "idFolder",
    header: "Id"
  }, {
    field: "name",
    header: "Name"
  }, {
    field: "alphabet",
    header: "Alphabet"
  }, {
    field: "years",
    header: "Years"
  }
]

@Component({
  selector: 'app-forder-view',
  templateUrl: './forder-view.component.html',
  styleUrls: ['./forder-view.component.css']
})
export class ForderViewComponent implements OnInit, AfterViewInit {

  columnsSchema: any = COLUMNS_SCHEMA;
  folderList: Folder[] = [];
  folder: Folder = {alphabet: "", idFolder: 0, idLocationFolder: 0, name: "", years: ""}
  dataSource = new MatTableDataSource<Folder>(this.folderList);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(
    private dialog: MatDialog,
    private folderService: FolderService,
    private notification: NotificationService
  ) {
    this.folderService.getFolderList(1).subscribe((response) => {
      this.folderList = response.data;
      console.log(this.folderList);
      this.dataSource.data = this.folderList;
    });
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  createFolderPanel() {
    const dialogRef = this.dialog.open(CreateFolderComponent, {
      width: '45%',
      height: '60%',
      data: {edit: false}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        console.log("Result")
        this.folderService.createFolder(result).subscribe({
          next: res => {
            console.log(res.message)
            this.folderList.push(res.data);
            this.updateView();
          },
          error: err => {
            this.notification.showsError(err.error.message);
          }
        });
      }
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
    this.dataSource.data = this.folderList;
  }
}
