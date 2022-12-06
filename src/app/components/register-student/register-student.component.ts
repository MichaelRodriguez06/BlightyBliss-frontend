import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateFilesComponent} from "../create-files/create-files.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ExamTryComponent} from "../exam-try/exam-try.component";
import {PlacesService} from "../services/places-service/places.service";
import {NotificationService} from "../../core/services/notification/notification.service";
import {RegisterStudentDialogData} from "./register-student-dialog-data";
import {StudentInfo} from "../../models/student-form/student-info";

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
    attendantCellphoneNumber: ['', Validators.required]
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  isLinear = false;
  studentForm: FormGroup;
  public editMode: boolean;
  identification: number | undefined;
  cityList: any[] = [];

  studentCellphoneNumber: number[] = [];
  minDateValue: Date = new Date("1920-01-01");
  maxDateValue: Date = new Date();
  DefaultDate: Date = new Date();
  attendantCellphoneNumber: any[] = [];
  attendantLandline: any[] = [];
  motherCellphoneNumber: any[] = [];
  fatherCellphoneNumber: any[] = [];
  regionList: any[] = [];
  countryList: any[] = [];
  uploadedFiles: any[] = [];

  studentInfo: StudentInfo;
  //studentMotherInfo: StudentParent;
  //studentFatherInfo: StudentParent;
  //studentAttendantInfo: StudentAttendant;
  //studentEnrollmentInfo: StudentEnrollment;

  constructor(private _formBuilder: FormBuilder,
              private _places: PlacesService,
              private dialog: MatDialog,
              private notification: NotificationService,
              public dialogRef: MatDialogRef<RegisterStudentComponent>,//Referencia al dialog usado
              @Inject(MAT_DIALOG_DATA) public data: RegisterStudentDialogData,//Datos del dialog
  ) {
    this.editMode = true
    //Crea el formulario de usuario
    /*this.studentForm = _formBuilder.group({
      id: [''],
      document: ['', Validators.required, Validators.minLength(2)],
      full_name: ['', Validators.required],
      document_type: ['', Validators.required],
      credentialId: ['', Validators.required],
      password: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required]
    })*/
    this.studentInfo = {
      academicTraining: "", address: "",
      bloodType: "", documentNumber: "",
      documentType: "", email: "",
      eps: "", firstName: "",
      gender: "", idAcademic: 0,
      idBornPlace: 0, idCity: 0,
      idDisability: 0, idStudentType: 0,
      institution: "", lastName: "",
      maritalStatus: "", neighborhood: "",
      personType: "", phoneNumbers: [],
      socioeconomicStratum: 0, vulnerablePopulation: ""
    }
    this.studentForm = _formBuilder.group(this.studentInfo);
  }

  ngOnInit(): void {
    this.setCountries();
  }

  setCountries() {
    console.log("SETTING COUNTRIES")
    this._places.getCountries().subscribe({
      next: (res) => {
        this.countryList = res.data;
        const {idPlace} = res.data[0];
        this.setRegions(idPlace);
      },
      error: err => {
        this.notification.showsError(err.error.message);
      }
    })
  }

  setRegions(idCountry: number) {
    this._places.getPlace(idCountry).subscribe({
      next: (res) => {
        if (res.data.places) {
          ({places: this.regionList} = res.data);
          if (res.data["places"]) {
            this.setCities(res["data"].places[0].idPlace)
          }
        }
      },
      error: err => {
        this.notification.showsError(err.error.message);
      }
    })
  }

  setCities(idRegion: number) {
    this._places.getPlace(idRegion).subscribe({
      next: (res) => {
        if (res.data.places) {
          ({places: this.cityList} = res.data);
        }
      },
      error: err => {
        this.notification.showsError(err.error.message);
      }
    })
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

  registerStudent() {
    this.dialogRef.close(this.studentForm.value)
  }


  onUpload(event: { files: any; }) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
