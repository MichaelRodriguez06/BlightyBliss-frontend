import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-options-management',
  templateUrl: './options-management.component.html',
  styleUrls: ['./options-management.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class OptionsManagementComponent implements OnInit {

  filesTypeForm: FormGroup;
  agreementForm: FormGroup;
  programsForm: FormGroup;

  constructor(private Filesfb:FormBuilder,private Agreementfb:FormBuilder,private Programsfb:FormBuilder) {
    this.filesTypeForm = this.Filesfb.group({
      name: [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)],
      fileTypes: this.Filesfb.array([])
    });
    this.agreementForm = this.Agreementfb.group({
      name: [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)],
      agreement: this.Agreementfb.array([])
    });
    this.programsForm = this.Programsfb.group({
      name: [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)],
      programs: this.Programsfb.array([])
    });
  }

  ngOnInit(): void {
  }

  get fileTypes() {
    return this.filesTypeForm.controls["fileTypes"] as FormArray;
  }
  get agreement() {
    return this.agreementForm.controls["agreement"] as FormArray;
  }
  get programs() {
    return this.programsForm.controls["programs"] as FormArray;
  }



  addFileType() {
    const filesTypeForm = this.Filesfb.group({
      title: ['', Validators.required],
    });

    this.fileTypes.push(filesTypeForm);
  }

  addAgreement() {
    const agreementForm = this.Agreementfb.group({
      title: ['', Validators.required],
    });

    this.agreement.push(agreementForm);
  }

  addPrograms() {
    const programsForm = this.Programsfb.group({
      title: ['', Validators.required],
    });

    this.programs.push(programsForm);
  }

  deleteFileType(fileTypesIndex: number) {
    /*
    const dialogRef = this.dialog.open(CreateFolderComponent, {
      width: '45%',
      height: '55%',
      data: {edit: false}
    });
     */
    if(true){
      this.fileTypes.removeAt(fileTypesIndex);
    }
  }

  deleteAgreement(fileTypesIndex: number) {
    /*
    const dialogRef = this.dialog.open(CreateFolderComponent, {
      width: '45%',
      height: '55%',
      data: {edit: false}
    });
     */
    if(true){
      this.agreement.removeAt(fileTypesIndex);
    }
  }

  deletePrograms(fileTypesIndex: number) {
    /*
    const dialogRef = this.dialog.open(CreateFolderComponent, {
      width: '45%',
      height: '55%',
      data: {edit: false}
    });
     */
    if(true){
      this.programs.removeAt(fileTypesIndex);
    }
  }

  summitChangesFileTypes() {

  }

  summitChangesAgreement() {

  }

  summitChangesPrograms() {

  }
}

