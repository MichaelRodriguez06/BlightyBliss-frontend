import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import { SelectItem } from 'primeng/api';
import {CreateFilesComponent} from "../create-files/create-files.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class RegisterStudentComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  isLinear = false;
  studentForm:FormGroup;
  public editMode: boolean;
  val: number = 0;
  celphoneNumber: number = 0;
  gendersList: any[];
  identification: number=0;
  documentTypesList: any[];
  bloodTypeList: any[];
  cityList: any[];
  vulnerablePopulationList: any[];
  socioEconomicStateList: any[];
  agreementList: any[];
  discapacityList: any[];
  minDateValue: Date;
  maxDateValue: Date;
  programList: any[];
  levelList: any[];



  constructor(private _formBuilder: FormBuilder,private dialog: MatDialog) {
    let date: Date = new Date();
    this.editMode = true
    //Crea el formulario de usuario
    this.studentForm = _formBuilder.group({
      id: [''],
      document: ['', Validators.required],
      full_name: ['', Validators.required],
      document_type: ['',  Validators.required],
      credentialId: ['', Validators.required],
      password: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required]
    })
    this.gendersList=[];
    this.documentTypesList=[{name:'1'},{name:'2'}];
    this.bloodTypeList =[];
    this.cityList =[];
    this.vulnerablePopulationList =[];
    this.socioEconomicStateList=[];
    this.agreementList=[];
    this.discapacityList=[];
    this.programList=[];
    this.levelList=[];
    this.minDateValue= new Date("1900-01-01");
    this.maxDateValue= new Date();
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    const id = this.studentForm.get('id')?.value;
    const document = this.studentForm.get('document')?.value;
    const full_name = this.studentForm.get('full_name')?.value;
    const document_type = this.studentForm.get('document_type')?.value;
    const credentialId = this.studentForm.get('credentialId')?.value;
    const password = this.studentForm.get('password')?.value;
    const city = this.studentForm.get('city')?.value;
    const phone_number = this.studentForm.get('phone_number')?.value;
    const address = this.studentForm.get('address')?.value;
    const user: User = {
      id: parseInt(id),
      document: document.toString(),
      full_name,
      document_type,
      password,
      city,
      phone_number: phone_number.toString(),
      credentialId,
      address
    };

  }

  updateDocumentPanel() {
    let component = CreateFilesComponent;
    const dialogRef = this.dialog.open(component, {
      width: '55%',
      height: '55%',
      data: {edit: false}
    });
  }
}
