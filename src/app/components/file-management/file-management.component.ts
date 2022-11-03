import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateFolderComponent} from "../create-folder/create-folder.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.css']
})
export class FileManagementComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder,private dialog: MatDialog) {
    this.form = this.fb.group({
      name: [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)],
      fileTypes: this.fb.array([])
    });
  }

  ngOnInit(): void {
  }

  get fileTypes() {
    return this.form.controls["fileTypes"] as FormArray;
  }


  addFileType() {
    const fileTypesForm = this.fb.group({
      title: ['', Validators.required],
    });

    this.fileTypes.push(fileTypesForm);
  }

  deleteFileType(fileTypesIndex: number) {
    const dialogRef = this.dialog.open(CreateFolderComponent, {
      width: '45%',
      height: '55%',
      data: {edit: false}
    });
    if(false){
      this.fileTypes.removeAt(fileTypesIndex);
    }
  }

  summitChanges() {

  }
}

