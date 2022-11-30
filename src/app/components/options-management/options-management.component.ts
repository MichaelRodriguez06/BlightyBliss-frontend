import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypeFiles} from '../services/GetTypesFile/get-types-documents.service';
import {TypeFile} from '../../models/typeFile';
import {ProgramsService} from "../services/programsServices/programs.service";
import {AgreementService} from "../services/agreementService/agreement.service";

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

  constructor(private Filesfb: FormBuilder,
              private Agreementfb: FormBuilder,
              private Programsfb: FormBuilder,
              private serviceTypeFiles: TypeFiles,
              private servicePrograms: ProgramsService,
              private serviceAgreements: AgreementService,
  ) {
    servicePrograms.getPrograms().subscribe(data => {
      console.log(data.data)
    });
    serviceTypeFiles.getTypesDocument().subscribe(data => {
      console.log(data.data)
    });
    serviceAgreements.getAgreements().subscribe(data => {
      console.log(data.data)
    });
    this.filesTypeForm = this.Filesfb.group({
      nameTypeFile: [Validators.required,
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

  get fileTypes() {
    return this.filesTypeForm.controls["fileTypes"] as FormArray;
  }

  get agreement() {
    return this.agreementForm.controls["agreement"] as FormArray;
  }

  get programs() {
    return this.programsForm.controls["programs"] as FormArray;
  }

  ngOnInit(): void {
  }

  addFileType() {
    const filesTypeForm = this.Filesfb.group({
      nameTypeFile: ['', Validators.required],
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
    if (true) {
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
    if (true) {
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
    if (true) {
      this.programs.removeAt(fileTypesIndex);
    }
  }

  summitChangesFileTypes() {
    console.log(this.filesTypeForm.value);
  }

  summitChangesAgreement() {

  }

  summitChangesPrograms() {

  }
}

