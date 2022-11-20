import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";
import {MenuItem} from "primeng/api";
import {ViewStudentsComponent} from "../view-students/view-students.component";

@Component({
  selector: 'app-exam-try',
  templateUrl: './exam-try.component.html',
  styleUrls: ['./exam-try.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})

export class ExamTryComponent implements OnInit {

  items: MenuItem[] = [];
  gfg: number=1;


  constructor(private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<ExamTryComponent>) { }

  ngOnInit() {
    this.items = [
      { label: "PrimeNG",routerLink: ViewStudentsComponent},
      { label: "AngularJS",routerLink: ViewStudentsComponent },
      { label: "ReactJS",routerLink: ViewStudentsComponent },
      { label: "HTML",routerLink: ViewStudentsComponent },
    ];
  }

  chan() {
    this.gfg += 1;
  }

  close() {
    this.dialogRef.close();
  }
}
