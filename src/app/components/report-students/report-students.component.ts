import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from "../../modules/Students/models/student";
import {Table} from "primeng/table";
import {MatDialog} from "@angular/material/dialog";
import {StudentService} from "../../modules/Students/services/student.service";
import {NotificationService} from "../../core/services/notification/notification.service";
import {DisabilitiesService} from "../services/disablilities-service/disabilities.service";
import {LevelsService} from "../services/levels-service/levels.service";
import {AgreementService} from "../services/agreementService/agreement.service";
import {ProgramsService} from "../services/programsServices/programs.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

const COLUMNS_SCHEMA = [
  {
    field: "document_number",
    header: "Document number"
  }, {
    field: "document_type",
    header: "Document type"
  }, {
    field: "first_name",
    header: "First name"
  }, {
    field: "last_name",
    header: "Last name"
  }, {
    field: "email",
    header: "Email"
  }, {
    field: "address",
    header: "Address"
  }, {
    field: "neighborhood",
    header: "Neighborhood"
  }, {
    field: "person_type",
    header: "Person type"
  }, {
    field:  "vulnerable_population",
    header: "Vulnerable population"
  }, {
    field: "gender",
    header: "Gender"
  }, {
    field: "blood_type",
    header: "Rh"
  }, {
    field: "marital_status",
    header: "Marital status"
  }, {
    field: "socioeconomic_stratum",
    header: "Socioeconomic stratum"
  }, {
    field: "eps",
    header: "Eps"
  }, {
    field: "institution",
    header: "Institution"
  }, {
    field: "city",
    header: "City"
  }, {
    field: "disability",
    header: "Disability"
  }, {
    field: "born_place",
    header: "Born place"
  }, {
    field: "student_type",
    header: "Student type"
  }, {
    field: "academic",
    header: "Academic"
  }
]

@Component({
  selector: 'app-report-students',
  templateUrl: './report-students.component.html',
  styleUrls: ['./report-students.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class ReportStudentsComponent implements OnInit {

  studentList: Student[] = [];
  columnsSchema: any = COLUMNS_SCHEMA;
  student: { document_number: number;document_type: number; first_name: string;last_name: string;email:string;address:string;neighborhood:string;person_type:string;vulnerable_population:string;gender:string;blood_type:string;marital_status:string;socioeconomic_stratum:string;eps:string;institution:string;city:string;disability:string;born_place:string;student_type:string;academic:string  } =
    {document_number: 0,document_type: 0,first_name: "", last_name:"", email:"",address:"",neighborhood:"",person_type:"",vulnerable_population:"",gender:"",blood_type:"",marital_status:"",socioeconomic_stratum:"",eps:"",institution:"",city:"",disability:"",born_place:"",student_type:"",academic:""  }
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
  ) { }

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

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

}
