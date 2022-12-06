import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypeFiles} from '../services/GetTypesFile/get-types-documents.service';
import {ProgramsService} from "../services/programsServices/programs.service";

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
      fileTypes: this.filesTypeFormfb.array([this.filesTypeFormfb.group({fileType:['']})])
    });
    this.programsForm = this.programsFormfb.group({
      programs: this.programsFormfb.array([this.programsFormfb.group({program:['']})])
    });
  }

  ngOnInit(): void {
  }

  get getPrograms(){
    return this.programsForm.get('programs') as FormArray;
  }

  get getFileTypes(){
    return this.filesTypeForm.get('fileTypes') as FormArray;
  }


  addFileType() {
    const control = <FormArray>this.filesTypeForm.controls['fileTypes'];
    control.push(this.filesTypeFormfb.group({fileType:[]}))
  }

  removeFileType(index: number){
    const control = <FormArray>this.filesTypeForm.controls['fileTypes'];
    control.removeAt(index)
  }

  addPrograms() {
    const control = <FormArray>this.programsForm.controls['programs'];
    control.push(this.programsFormfb.group({program:[]}))
  }

  removePrograms(index: number){
    const control = <FormArray>this.programsForm.controls['programs'];
    control.removeAt(index)
  }


  summitChangesFileTypes() {
    console.log(this.filesTypeForm.value);
  }

  summitChangesPrograms() {

  }

}

