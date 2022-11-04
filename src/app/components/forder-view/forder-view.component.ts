import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CreateFolderComponent} from "../create-folder/create-folder.component";
import {FolderService} from "../../modules/Folders/services/folder.service";
import {Folder} from "../../modules/Folders/models/folder";
import {NotificationService} from "../../core/services/notification/notification.service";

export interface FolderItem {
  idFolder: number,
  name: string,
  alphabet: string,
  years: string
}

const COLUMNS_SCHEMA = [
  {
    key: "idFolder",
    label: "id"
  }, {
    key: "name",
    label: "name"
  }, {
    key: "alphabet",
    label: "alphabet"
  }, {
    key: "years",
    label: "years"
  }
]

@Component({
  selector: 'app-forder-view',
  templateUrl: './forder-view.component.html',
  styleUrls: ['./forder-view.component.css']
})
export class ForderViewComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  folderList: Folder[] = [];
  dataSource = new MatTableDataSource<Folder>(this.folderList);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

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

  ngOnInit(): void {
  }

  createFolderPanel() {
    const dialogRef = this.dialog.open(CreateFolderComponent, {
      width: '45%',
      height: '60%',
      data: {edit: false}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("Result")
      console.log(result)
      if (result) {
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

  private updateView(){
    this.dataSource.data = this.folderList;
  }
}
