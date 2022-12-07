import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateFilesComponent} from "../create-files/create-files.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ExamTryComponent} from "../exam-try/exam-try.component";
import {PlacesService} from "../services/places-service/places.service";
import {NotificationService} from "../../core/services/notification/notification.service";
import {RegisterStudentDialogData} from "./register-student-dialog-data";
import {StudentInfo} from "../../models/student-form/student-info";
import {StudentAttendant} from "../../models/student-form/student-attendant";
import {StudentParent} from "../../models/student-form/student-parent";
import {StudentForm} from "../../models/student-form/student-form";

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

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  isLinear = false;
  studentForm: FormGroup;
  secondFormGroup: FormGroup;
  public editMode: boolean;
  cityList: any[] = [];
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
  studentAttendantInfo: StudentAttendant;
  studentMotherInfo: StudentParent;
  studentFatherInfo: StudentParent;
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
    this.studentInfo = {
      birthDay: undefined,
      academicTraining: "", address: "",
      bloodType: "", documentNumber: undefined,
      documentType: "", email: "",
      eps: "", firstName: "",
      gender: "", idBornPlace: 0, idCity: 0,
      idDisability: 0, idStudentType: 0,
      institution: "", lastName: "",
      maritalStatus: "", neighborhood: "",
      // TODO define person type in constraints
      personType: "STUDENT", phoneNumbers: [],
      socioeconomicStratum: 0, vulnerablePopulation: "",
      residentPlaceLastFiveYears: ""
    }

    this.studentForm = _formBuilder.group(this.studentInfo);

    this.studentAttendantInfo = {
      idPerson: "attendant", documentNumber: "123",
      documentType: "string", firstName: "",
      lastName: "", personType: "USER",
      phoneNumbers: [], fixedPhoneNumbers: [],
      companyName: "", companyAddress: "",
      companyNeighborhood: "", idCity: 0
    }

    this.studentFatherInfo = {
      documentNumber: "", documentType: "",
      firstName: "", lastName: "",
      email: "", address: "",
      neighborhood: "", personType: "",
      idCity: 0, PhoneNumbers: []
    }

    this.studentMotherInfo = {
      documentNumber: "", documentType: "",
      firstName: "", lastName: "",
      email: "", address: "",
      neighborhood: "", personType: "",
      idCity: 0, PhoneNumbers: []
    }

    this.secondFormGroup = _formBuilder.group({
      studentAttendantInfo: this.studentAttendantInfo,
      studentFatherInfo: this.studentFatherInfo,
      studentMotherInfo: this.studentMotherInfo
    });
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
      height: '100%',
      data: {edit: false}
    });
  }

  registerStudent() {
    console.log("registr student")
    this.studentAttendantInfo = this.secondFormGroup.controls["studentAttendantInfo"].value
    this.studentMotherInfo = this.secondFormGroup.controls["studentMotherInfo"].value
    this.studentFatherInfo = this.secondFormGroup.controls["studentFatherInfo"].value
    const totalForm: StudentForm = {
      studentEnrollment: {
        idProgram: 1,
        idAgreement: 1,
        idLevel: 2,
        date: new Date()
      },
      studentInfo: this.studentForm.value,
      studentAttendant: this.studentAttendantInfo,
      studentFather: this.studentFatherInfo,
      studentMother: this.studentMotherInfo
    }
    this.dialogRef.close(totalForm)
  }


  onUpload(event: { files: any; }) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
