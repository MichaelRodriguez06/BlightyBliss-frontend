import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from "../../modules/Students/models/student";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {StudentService} from "../../modules/Students/services/student.service";
import {NotificationService} from "../../core/services/notification/notification.service";
import {CreateFolderComponent} from "../create-folder/create-folder.component";
import {Table} from "primeng/table";
import {ExamTryComponent} from "../exam-try/exam-try.component";

export interface FolderItem {
  name: string,
  doctype: string,
  docNumber: number
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
  selector: 'app-view-student-information',
  templateUrl: './view-student-information.component.html',
  styleUrls: ['./view-student-information.component.css',
    '../../../../node_modules/primeflex/primeflex.css']
})
export class ViewStudentInformationComponent implements OnInit {

  columnsSchema: any = COLUMNS_SCHEMA;
  studentList: Student[] = [];
  student: { document_number: number; first_name: string; document_type: number } = {first_name: "", document_type: 0, document_number: 0}
  dataSource = new MatTableDataSource<Student>(this.studentList);

  selectedState: any = null;

  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(
    private dialog: MatDialog,
    private studentService: StudentService,
    private notification: NotificationService,
  ) {/*
    this.studentService.getStudentList(1).subscribe((response) => {
      this.studentList = response.data;
      console.log(this.studentList);
      this.dataSource.data = this.studentList;
    });*/
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  createStudentPanel() {
    const dialogRef = this.dialog.open(CreateFolderComponent, {
      width: '45%',
      height: '60%',
      data: {edit: false}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        console.log("Result")
        this.studentService.creatStudent(result).subscribe({
          next: res => {
            console.log(res.message)
            this.studentList.push(res.data);
            this.updateView();
          },
          error: err => {
            this.notification.showsError(err.error.message);
          }
        });
      }
    });
  }


  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  private updateView(){
    this.dataSource.data = this.studentList;
  }

  close() {

  }

  createExamTryPanel() {
    const dialogRef = this.dialog.open(ExamTryComponent, {
      width: '55%',
      height: '55%',
      data: {edit: false}
    });
  }
}
