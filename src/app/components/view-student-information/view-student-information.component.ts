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
import {FormControl} from "@angular/forms";

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
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class ViewStudentInformationComponent implements OnInit {

  studentList: Student[] = [];
  student: { document_number: number; first_name: string; document_type: number } = {first_name: "", document_type: 0, document_number: 0}
  dataSource = new MatTableDataSource<Student>(this.studentList);
  documents: any[] = [{name: 'Accounting'}, {name: 'Marketing'}, {name: 'Production'}, {name: 'Research'}];
  selectedCategories: any[] = [{name: 'Accounting'}, {name: 'Production'}];
  tabs = [{examLevel:'A1',teacherName:'Pepito perez',listeningAnswered:10,listeningTotal:10,readingAnswered:1,readingTotal:1,writingAnswered:1,writingTotal:1,speakingAnswered:523,speakingTotal:1,grammarAnswered:23,grammarTotal:1,vocabularyAnswered:1,vocabularyTotal:1,resultAnswered:1,resultTotal:1,pass:"yes",startDate:"21-02-2022",finishDate:"21-02-2022",comments:"Ser mejor :thumsup"}
    ,{examLevel:'B2',teacherName:'Rodolfo hernandez',listeningAnswered:10,listeningTotal:10,readingAnswered:1,readingTotal:1,writingAnswered:1,writingTotal:1,speakingAnswered:523,speakingTotal:1,grammarAnswered:23,grammarTotal:1,vocabularyAnswered:1,vocabularyTotal:1,resultAnswered:1,resultTotal:1,pass:"yes",startDate:"21-02-2022",finishDate:"21-02-2022",comments:"Ser mejor :thumsup"}];
  //Al que va a llegar primero por defecto
  selected = new FormControl(this.tabs.length);
  isYounger:boolean=false;
  isAdmin:boolean=true;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService,
    private notification: NotificationService,
  ) {
    /*
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
        console.log("result")
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

  disable() {

  }

  createExamTryPanel() {
    const dialogRef = this.dialog.open(ExamTryComponent, {
      width: '60%',
      height: '70%',
      data: {edit: false}
    });
  }

}
