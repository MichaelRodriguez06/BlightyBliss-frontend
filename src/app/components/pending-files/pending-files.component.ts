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
import {TypeFiles} from "../services/GetTypesFile/get-types-documents.service";
import {UploadFileServiceService} from "../services/UploadFileService/upload-file-service.service";
import {PendingFileAsignationComponent} from "../pending-file-asignation/pending-file-asignation.component";

const COLUMNS_SCHEMA = [
  {
    field: "name",
    header: "Name"
  }, {
    field: "fileTypeName",
    header: "File Type"
  }, {
    field: "link",
    header: "Link"
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
    idAccount: 0,
    link: 'https://docs.google.com/document/d/1396WtOSSqwr04eRmpPYo-SlDZnymM-nEOuomNg6eqOI/edit?usp=sharing'
  }
  dataSource = new MatTableDataSource<FilePending>(this.pendingFileList);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(
    private dialog: MatDialog,
    private pendingFilesService: GetPendingFilesService,
    private notification: NotificationService,
    private serviceGetTypesDocument: TypeFiles,
    private serviceUploadFile: UploadFileServiceService,
  ) {
    this.pendingFilesService.getPendingFiles().subscribe(response => {
      console.log(response.data)
      this.pendingFileList = response.data;
      console.log(this.pendingFileList);
      this.dataSource.data = this.pendingFileList;
      this.updateView();
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
      height: '50%',
      data: {edit: false}
    });


  }

 /* dialogRef.afterClosed().subscribe((result) => {
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
});*/


  createEditPanel() {

  }

  createDeletePanel() {

  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  public getStatusName(folder: Folder): string {
    if (folder.physicalStatus == 'A') {
      return 'Available';
    }
    return 'Full';
  }

  private updateView() {
    this.dataSource.data = this.pendingFileList;
  }

  createAsignationPanel() {
    const dialogRef = this.dialog.open(PendingFileAsignationComponent, {
      width: '45%',
      height: '50%',
      data: {edit: false}
    });
  }
}
