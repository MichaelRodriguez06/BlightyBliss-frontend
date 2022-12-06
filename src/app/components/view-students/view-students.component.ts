import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {StudentService} from "../../modules/Students/services/student.service";
import {Student} from "../../modules/Students/models/student";
import {NotificationService} from "../../core/services/notification/notification.service";
import {Table} from "primeng/table";
import {RegisterStudentComponent} from "../register-student/register-student.component";
import {DisabilitiesService} from "../services/disablilities-service/disabilities.service";
import {LevelsService} from "../services/levels-service/levels.service";
import {AgreementService} from "../services/agreementService/agreement.service";
import {ProgramsService} from "../services/programsServices/programs.service";
import {Constraints} from "../../models/constraints/constraints";

export interface FolderItem {
  name: string,
  doctype: string,
  docnumber: number
}

const COLUMNS_SCHEMA = [
  {
    field: "first_name",
    header: "name"
  }, {
    field: "document_type",
    header: "doctype"
  }, {
    field: "document_number",
    header: "docnumber"
  }
]

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class ViewStudentsComponent implements OnInit {

  value1: string = "Id";
  columnsSchema: any = COLUMNS_SCHEMA;
  studentList: Student[] = [];
  student: { document_number: number; first_name: string; document_type: number } = {first_name: "", document_type: 0, document_number: 0}
  dataSource = new MatTableDataSource<Student>(this.studentList);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  agreementList: any[] = [];
  disabilityList: any[] = [];
  programList: any[] = [];
  levelList: any[] = [];
  studentTypeList: any[] = [];

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService,
    private notification: NotificationService,
    private _disabilities: DisabilitiesService,
    private _students: StudentService,
    private _levels: LevelsService,
    private _agreements: AgreementService,
    private _programs: ProgramsService
  ) {
    /*
    this.studentService.getStudentList(1).subscribe((response) => {
      this.studentList = response.data;
      console.log(this.studentList);
      this.dataSource.data = this.studentList;

    });
    */
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
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
    );
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
  }

  createStudentPanel() {
    const dialogRef = this.dialog.open(RegisterStudentComponent, {
      width: '90%',
      height: '95%',
      data: {
        edit: false,
        agreementList: this.agreementList,
        disabilityList: this.disabilityList,
        programList: this.programList,
        levelList: this.levelList,
        studentTypeList: this.studentTypeList,
        gendersList: Constraints.GENDER,
        documentTypesList: Constraints.DOCUMENT_TYPE,
        bloodTypeList: Constraints.BLOOD_TYPE,
        vulnerablePopulationList: Constraints.VULNERABLE_POPULATION,
        socioeconomicStateList: Constraints.SOCIOECONOMIC_STRATUM,
        maritalStatusList: Constraints.MARITAL_STATUS,
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        console.log("Result")
        /*this.studentService.creatStudent(result).subscribe({
          next: res => {
            console.log(res.message)
            this.studentList.push(res.data);
            this.updateView();
          },
          error: err => {
            this.notification.showsError(err.error.message);
          }
        });*/
      }
    });
  }


  createEditPanel() {

  }

  createDeletePanel() {

  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  private updateView(){
    this.dataSource.data = this.studentList;
  }
}
