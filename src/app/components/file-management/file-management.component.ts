import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.css']
})
export class FileManagementComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder) {
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
/**
 * Deberia agregar una ventana para decir estar seguro(agregar despues)
 * */
    this.fileTypes.removeAt(fileTypesIndex);
  }

  summitChanges() {

  }
}

