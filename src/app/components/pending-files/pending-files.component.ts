import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {ViewDocumentComponent} from "../view-document/view-document.component";
import {CreateFilesComponent} from "../create-files/create-files.component";
import {PendingFileAsignationComponent} from "../pending-file-asignation/pending-file-asignation.component";
import {GetPendingFilesService} from "../services/PendingFilesService/get-pending-files.service";
import {FilePending} from "../../models/FilePending";
import {NotificationService} from "../../core/services/notification/notification.service";
import {Table} from "primeng/table";
import {Folder} from "../../modules/Folders/models/folder";

export interface foldersMatrix {
  name: string;
  direction: string;
  typeFile: string
}

const ELEMENT_DATA: foldersMatrix[] = [
  {name: "1", direction: 'Hydrogen', typeFile: 'dsa'},
  {name: "2", direction: 'Hydrogen', typeFile: 'dsa'},
  {name: "3", direction: 'Hydrogen', typeFile: 'dsa'},
  {name: "4", direction: 'Hydrogen', typeFile: 'dsa'},
  {name: "5", direction: 'Hydrogen', typeFile: 'dsa'},
  {name: "6", direction: 'Hydrogen', typeFile: 'dsa'},
  {name: "7", direction: 'Hydrogen', typeFile: 'dsa'},
];

@Component({
  selector: 'app-pending-files',
  templateUrl: './pending-files.component.html',
  styleUrls: ['./pending-files.component.css']
})
export class PendingFilesComponent implements OnInit {

  pendingFiles: FilePending[] = []
  pendingFile: FilePending = {
    email: '',
    idAccount: 0,
    idPerson: 0,
    personName: "",
    personDocument: '',
    status: '',
    type: ''
  }
  displayedColumns: string[] = ['Name', 'Direction', 'Type File'];
  dataSource = new MatTableDataSource<FilePending>(this.pendingFiles);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dialog: MatDialog,
              private notificationService: NotificationService,
              private serviceGetPendingFiles: GetPendingFilesService) {
    this.loadPendingFiles();
    this.serviceGetPendingFiles.getPendingFiles().subscribe(data => {
      this.pendingFiles = data.data;
      this.dataSource.data = this.pendingFiles;
    });

  }

  ngOnInit(): void {
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  private updateView() {
    this.dataSource.data = this.pendingFiles;
  }

  public getStatusName(folder: FilePending): string {
    if (folder.status == 'A') {
      return 'Available';
    }
    return 'Full';
  }

  seeDocument() {
    const dialogRef = this.dialog.open(ViewDocumentComponent, {
      width: '90%',
      height: '90%',
      data: {edit: false}
    });
  }

  loadPendingFiles() {
    this.serviceGetPendingFiles.getPendingFiles().subscribe(data => {
      console.log(data.data)
    })
  }

  updateDocumentPanel() {
    let component = CreateFilesComponent;
    const dialogRef = this.dialog.open(component, {
      width: '55%',
      height: '55%',
      data: {edit: false}
    });

  }

  asingPendingFile() {
    let component = PendingFileAsignationComponent;
    const dialogRef = this.dialog.open(component, {
      width: '55%',
      height: '55%',
      data: {edit: false}
    });

  }
}
