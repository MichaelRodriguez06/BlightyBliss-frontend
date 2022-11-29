import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CreateFolderComponent} from "../create-folder/create-folder.component";
import {FolderService} from "../../modules/Folders/services/folder.service";
import {Folder} from "../../modules/Folders/models/folder";
import {NotificationService} from "../../core/services/notification/notification.service";
import {Table} from "primeng/table";
import {FileUpload} from "primeng/fileupload";
import {CreateFilesComponent} from "../create-files/create-files.component";
import {GetPendingFilesService} from "../services/PendingFilesService/get-pending-files.service";
import {FilePending} from "../../models/FilePending";

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
  }, {
    field: "physicalStatus",
    header: "Status"
  }
]

@Component({
  selector: 'app-pending-files',
  templateUrl: './pending-files.component.html',
  styleUrls: ['./pending_files.component.scss',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class PendingFilesComponent implements OnInit, AfterViewInit {

  columnsSchema: any = COLUMNS_SCHEMA;
  pendingFileList: FilePending[] = [];
  pendingFile: FilePending = {
    status: '',
    type: '',
    personDocument: '',
    idPerson: 0,
    personName: '',
    email: '',
    idAccount: 0
  }
  dataSource = new MatTableDataSource<FilePending>(this.pendingFileList);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(
    private dialog: MatDialog,
    private pendingFilesService: GetPendingFilesService,
    private notification: NotificationService
  ) {
    this.pendingFilesService.getPendingFiles().subscribe(response => {
      console.log(response.data)
      this.pendingFileList = response.data;
      console.log(this.pendingFileList);
      this.dataSource.data = this.pendingFileList;
    });
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  createUploadPendingFile() {
    const dialogRef = this.dialog.open(CreateFilesComponent, {
      width: '45%',
      height: '64%',
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
    this.dataSource.data = this.pendingFileList;
  }

  public getStatusName(folder: Folder): string {
    if (folder.physicalStatus == 'A') {
      return 'Available';
    }
    return 'Full';
  }
}
