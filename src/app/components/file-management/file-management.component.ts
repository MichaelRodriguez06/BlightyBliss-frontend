import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateFilesComponent} from "../create-files/create-files.component";

@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.css']
})
export class FileManagementComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  create() {
    const dialogRef = this.dialog.open(CreateFilesComponent, {
      width: '45%',
      height: '55%',
      data: {edit: false}
    });
  }
}
