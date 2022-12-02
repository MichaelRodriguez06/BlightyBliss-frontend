import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-exam-try',
  templateUrl: './exam-try.component.html',
  styleUrls: ['./exam-try.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})

export class ExamTryComponent implements OnInit {

  items: MenuItem[] = [];
  isLinear = false;
  minDateValue: Date;
  maxDateValue: Date;
  stateOptions: any[];
  defaultButtonValue: string|undefined;
  firstFormGroup = this._formBuilder.group({
    evaluatorName: ['', Validators.required],
    isAproved:['', Validators.required],
    examStartDate:['', Validators.required],
    examFinishtDate:['', Validators.required],
    totalCorrectQuestion:['', Validators.required,Validators.max(999)],
    totalQuestion:['', Validators.required,Validators.max(999)],
    coments:['',Validators.maxLength(200)]
  });
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<ExamTryComponent>) {
    this.stateOptions = [{label: 'Aproved', value: 'aproved'}, {label: 'Reprobate', value: 'Reprobate'}];
    this.minDateValue = new Date("1920-01-01");
    this.maxDateValue = new Date();
  }

  ngOnInit() {
  }


  close() {
    this.dialogRef.close();
  }

  summitExamTry() {

  }
}
