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
import {AgreementService} from "../services/agreementService/agreement.service";
import {ProgramsService} from "../services/programsServices/programs.service";
import {PlacesService} from "../services/places-service/places.service";
import {AppRoutes} from "../../core/services/app-routes";
import {NotificationService} from "../../core/services/notification/notification.service";
import {Place} from "../../models/place";
import {combineLatestAll, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpApiResponse} from "../../core/models/http-api-response";

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
  studentCellphoneNumber: number[] = [];
  gendersList: any[];
  identification: number | undefined;
  documentTypesList: any[];
  bloodTypeList: any[];
  cityList: any[] = [];
  vulnerablePopulationList: any[];
  socioeconomicStateList: any[];
  agreementList: any[] = [];
  disabilityList: any[] = [];
  maritalStatusList: any[] = [];
  minDateValue: Date = new Date("1920-01-01");
  maxDateValue: Date = new Date();
  DefaultDate: Date = new Date();
  programList: any[] = [];
  levelList: any[] = [];
  studentTypeList: any[] = [];
  attendantCellphoneNumber: any[] = [];
  attendantLandline: any[] = [];
  motherCellphoneNumber: any[] = [];
  fatherCellphoneNumber: any[] = [];
  regionList: any[] = [];
  countryList: any[] = [];
  uploadedFiles: any[] = [];

  constructor(private _formBuilder: FormBuilder,
              private dialog: MatDialog,
              private _disabilities: DisabilitiesService,
              private _students: StudentService,
              private _levels: LevelsService,
              private _agreements: AgreementService,
              private _programs: ProgramsService,
              private _places: PlacesService,
              private notification: NotificationService
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
    this.vulnerablePopulationList = Constraints.VULNERABLE_POPULATION;
    this.socioeconomicStateList = Constraints.SOCIOECONOMIC_STRATUM;
  }

  ngOnInit(): void {
    this._agreements.getAgreements().subscribe({
        next: res => {
          this.agreementList = res.data;
        },
        error: err => {
          console.log(err.error.message)
        }
      }
    )
    this._disabilities.requestDisabilities().subscribe({
        next: res => {
          this.disabilityList = res.data;
        },
        error: err => {
          console.log(err.error.message)
        }
      }
    )
    this.maritalStatusList = Constraints.MARITAL_STATUS;
    this._programs.getPrograms().subscribe({
        next: res => {
          this.programList = res.data;
        },
        error: err => {
          console.log(err.error.message)
        }
      }
    )
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
    this.setCountries();
  }

  setCountries(){
    console.log("SETTING COUNTRIES")
    this._places.getCountries().subscribe({
      next: (res) => {
        this.countryList = res.data;
        const {idPlace, places} = res.data[0];
        this.setRegions(idPlace);
        if (places) {
          console.log()
          this.setCities(places[0].idPlace)
        }
      },
      error: err => {
        this.notification.showsError(err.error.message);
      }
    })
  }

  setRegions(idCountry: number){
    this._places.getPlace(idCountry).subscribe({
      next: (res) => {
        if (res.data.places){
          ({places: this.regionList} = res.data);
        }
      },
      error: err => {
        this.notification.showsError(err.error.message);
      }
    })
  }

  setCities(idRegion: number){
    this._places.getPlace(idRegion).subscribe({
      next: (res) => {
        if (res.data.places){
          ({places: this.cityList} = res.data);
        }
      },
      error: err => {
        this.notification.showsError(err.error.message);
      }
    })
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
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
