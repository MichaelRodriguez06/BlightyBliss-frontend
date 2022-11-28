import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {ViewDocumentComponent} from "../view-document/view-document.component";
import {CreateFilesComponent} from "../create-files/create-files.component";
import {PendingFileAsignationComponent} from "../pending-file-asignation/pending-file-asignation.component";

export interface foldersMatrix {
  name: string;
  direction: string;
};

const ELEMENT_DATA: foldersMatrix[] = [
  {name: "1", direction: 'Hydrogen'},
  {name: "2", direction: 'Hydrogen'},
  {name: "3", direction: 'Hydrogen'},
  {name: "4", direction: 'Hydrogen'},
  {name: "5", direction: 'Hydrogen'},
  {name: "6", direction: 'Hydrogen'},
  {name: "7", direction: 'Hydrogen'},
];

@Component({
  selector: 'app-pending-files',
  templateUrl: './pending-files.component.html',
  styleUrls: ['./pending-files.component.css']
})
export class PendingFilesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'direction'];
  dataSource = new MatTableDataSource<foldersMatrix>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  seeDocument() {
    const dialogRef = this.dialog.open(ViewDocumentComponent, {
      width: '90%',
      height: '90%',
      data: {edit: false}
    });
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
