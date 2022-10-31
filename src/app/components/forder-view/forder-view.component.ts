import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CreateFilesComponent} from "../create-files/create-files.component";
import {RecoverPasswordComponent} from "../recover-password/recover-password.component";
import {CreateFolderComponent} from "../create-folder/create-folder.component";
import {ViewDocumentComponent} from "../view-document/view-document.component";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-forder-view',
  templateUrl: './forder-view.component.html',
  styleUrls: ['./forder-view.component.css']
})

export class ForderViewComponent implements OnInit,AfterViewInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  createFolderPanel() {
    const dialogRef = this.dialog.open(CreateFolderComponent, {
      width: '45%',
      height: '55%',
      data: {edit: false}
    });
  }

  createEditPanel() {
    const dialogRef = this.dialog.open(CreateFilesComponent, {
      width: '45%',
      height: '55%',
      data: {edit: false}
    });
  }

  createDeletePanel() {
    const dialogRef = this.dialog.open(RecoverPasswordComponent, {
      width: '45%',
      height: '55%',
      data: {edit: false}
    });
  }

  seeDocument() {
    const dialogRef = this.dialog.open(ViewDocumentComponent, {
      width: '90%',
      height: '90%',
      data: {edit: false}
    });
  }
}
