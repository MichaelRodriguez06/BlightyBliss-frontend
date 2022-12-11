import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypeFiles} from '../services/GetTypesFile/get-types-documents.service';
import {ProgramsService} from "../services/programsServices/programs.service";
import {Program} from "../../models/program";
import {TypeFile} from "../../models/typeFile";

@Component({
  selector: 'app-options-management',
  templateUrl: './options-management.component.html',
  styleUrls: ['./options-management.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class OptionsManagementComponent implements OnInit {

  filesTypeForm: FormGroup;
  programsForm: FormGroup;
  isAdmin: boolean = true;
  public programList: Program[] = []
  public typeFileList: TypeFile[] = []

  constructor(private filesTypeFormfb: FormBuilder,
              private programsFormfb: FormBuilder,
              private serviceTypeFiles: TypeFiles,
              private servicePrograms: ProgramsService,
  ) {
    servicePrograms.getPrograms().subscribe(data => {
      console.log(data.data)
    });
    serviceTypeFiles.getTypesDocument().subscribe(data => {
      console.log(data.data)
    });
    this.filesTypeForm = this.filesTypeFormfb.group({
      fileTypes: this.filesTypeFormfb.array([this.filesTypeFormfb.group({fileType: ['']})])
    });
    this.programsForm = this.programsFormfb.group({
      programs: this.programsFormfb.array([this.programsFormfb.group({program: ['']})])
    });
  }

  get getPrograms() {
    return this.programsForm.get('programs') as FormArray;
  }

  get getFileTypes() {
    return this.filesTypeForm.get('fileTypes') as FormArray;
  }

  ngOnInit(): void {

    this.programList = []
    let Program = this.servicePrograms.getPrograms().subscribe(data => {
      for (let idx = 0; idx < data.data.length; idx++) {
        this.programList.push(data.data[idx])
        if (idx == data.data.length) {
          this.initializeForm();
        }
      }
    });

    this.typeFileList = []
    let typeFile = this.serviceTypeFiles.getTypesDocument().subscribe(data => {
      for (let idx = 0; idx < data.data.length; idx++) {
        this.typeFileList.push(data.data[idx]);
        if (idx == data.data.length) this.initialize2Form()
      }
    })

  }


  addFileType() {
    const control = <FormArray>this.filesTypeForm.controls['fileTypes'];
    control.push(this.filesTypeFormfb.group({fileType: []}))
  }

  removeFileType(index: number) {
    const control = <FormArray>this.filesTypeForm.controls['fileTypes'];
    control.removeAt(index)
  }

  addPrograms() {
    const control = <FormArray>this.programsForm.controls['programs'];
    control.push(this.programsFormfb.group({program: []}))
  }

  removePrograms(index: number) {
    const control = <FormArray>this.programsForm.controls['programs'];
    control.removeAt(index)
  }


  summitChangesFileTypes() {
    console.log(this.filesTypeForm.value);
  }

  summitChangesPrograms() {

  }

  private initializeForm() {
    let formTem: FormGroup;
    let jsonString = '';
    this.programList.forEach((campo, index) => {
      jsonString += `{${jsonString.slice(0, jsonString.length - 1)}}`;
      formTem = this.programsFormfb.group(JSON.parse(jsonString));
      this.addValidations(formTem);
    })
  }

  private addValidations(pForm: FormGroup) {
    this.programList.forEach((campo, idx) => {
      console.log(pForm.controls[campo.name]);
      pForm.controls[campo.name].setValidators([Validators.required])
      if (idx === this.programList.length - 1) {
        console.log("Esta listaaaaaaa:  " + this.programList)
        this.programsForm = pForm;
      }
    })

  }

  private initialize2Form() {
    let formTem: FormGroup;
    let jsonString = '';
    this.typeFileList.forEach((campo, index) => {
      jsonString += `{${jsonString.slice(0, jsonString.length - 1)}}`;
      formTem = this.filesTypeFormfb.group(JSON.parse(jsonString));
      this.addValidations2(formTem);
    })
  }

  private addValidations2(formTem: FormGroup) {
    this.typeFileList.forEach((campo, idx) => {
      console.log(formTem.controls[campo.name]);
      formTem.controls[campo.name].setValidators([Validators.required])
      if (idx === this.programList.length - 1) {
        console.log("Esta listaaaaaaa:  " + this.programList)
        this.programsForm = formTem;
      }
    })
  }
}

