import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {CreateFilesComponent} from "../create-files/create-files.component";
import {MatDialog} from "@angular/material/dialog";
import {ExamTryComponent} from "../exam-try/exam-try.component";
import {Constraints} from "../../models/constraints/constraints";
import {DisabilitiesService} from "../services/disablilities-service/disabilities.service";
import {StudentService} from "../../modules/Students/services/student.service";
import {LevelsService} from "../services/levels-service/levels.service";

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
    attendantCelphoneNumber: ['', Validators.required]
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  isLinear = false;
  studentForm: FormGroup;
  public editMode: boolean;
  val: number = 0;
  studentCellphoneNumber: number[];
  gendersList: any[];
  identification: number | undefined;
  documentTypesList: any[];
  bloodTypeList: any[];
  cityList: any[];
  vulnerablePopulationList: any[];
  socioeconomicStateList: any[];
  agreementList: any[];
  disabilityList: any[] = [];
  maritalStatusList: any[];
  minDateValue: Date;
  maxDateValue: Date;
  DefaultDate: Date;
  programList: any[];
  levelList: any[] = [];
  studentTypeList: any[] = [];
  attendantCellphoneNumber: any[];
  attendantLandline: any[];
  motherCellphoneNumber: any[];
  fatherCellphoneNumber: any[];
  regionList: any[];
  countryList: any[];
  uploadedFiles: any[] = [];



  constructor(private _formBuilder: FormBuilder,
              private dialog: MatDialog,
              private _disabilities: DisabilitiesService,
              private _students: StudentService,
              private _levels: LevelsService,
              ) {
    this.editMode = true
    //Crea el formulario de usuario
    this.studentForm = _formBuilder.group({
      id: [''],
      document: ['', Validators.required],
      full_name: ['', Validators.required],
      document_type: ['', Validators.required],
      credentialId: ['', Validators.required],
      password: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required]
    })

    this.gendersList = Constraints.GENDER;
    this.documentTypesList = Constraints.DOCUMENT_TYPE;
    this.bloodTypeList = Constraints.BLOOD_TYPE;
    this.cityList = [];
    this.regionList = [];
    this.countryList = [];
    this.vulnerablePopulationList = Constraints.VULNERABLE_POPULATION;
    this.socioeconomicStateList = Constraints.SOCIOECONOMIC_STRATUM;
    this.agreementList = [];
    _disabilities.requestDisabilities().subscribe({
        next: res => {
          this.disabilityList = res.data;
        },
        error: err => {
          console.log(err.error.message)
        }
      }
    )
    this.maritalStatusList = Constraints.MARITAL_STATUS;
    this.programList = [];
    this._levels.getLevels().subscribe({
      next: res => {
        this.levelList = res.data;
      },
      error: err => {
        console.log(err.error.message)
      }
    });
    this._students.getStudentTypes().subscribe({
      next: res => {
        this.studentTypeList = res.data;
      },
      error: err => {
        console.log(err.error.message)
      }
    });
    this.studentCellphoneNumber = [];
    this.attendantCellphoneNumber = [];
    this.attendantLandline = [];
    this.fatherCellphoneNumber = [];
    this.motherCellphoneNumber = [];
    this.minDateValue = new Date("1920-01-01");
    this.maxDateValue = new Date();
    this.DefaultDate = new Date("2010-01-01")
  }

  ngOnInit()
    :
    void {
  }

  saveUser()
    :
    void {
    const id = this.studentForm.get('id')?.value;
    const document = this.studentForm.get('document')?.value;
    const full_name = this.studentForm.get('full_name')?.value;
    const document_type = this.studentForm.get('document_type')?.value;
    const credentialId = this.studentForm.get('credentialId')?.value;
    const password = this.studentForm.get('password')?.value;
    const city = this.studentForm.get('city')?.value;
    const phone_number = this.studentForm.get('phone_number')?.value;
    const address = this.studentForm.get('address')?.value;
    const user
      :
      User = {
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

  updateExamTry() {
    const dialogRef = this.dialog.open(ExamTryComponent, {
      width: '55%',
      height: '55%',
      data: {edit: false}
    });
  }

  registStudent() {

  }


  onUpload(event: { files: any; }) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
      }
}
