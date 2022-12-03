import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-certificate',
  templateUrl: './edit-certificate.component.html',
  styleUrls: ['./edit-certificate.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class EditCertificateComponent implements OnInit {

  form: FormGroup;
  minDateValue: Date;
  maxDateValue: Date;
  studentList: any[] = [];

  constructor(private fb: FormBuilder,) {
    this.form = fb.group({
      documentOrName:[''],
      deliveredDate:[''],
      folNumber:[],
      pagineNumber:[],

    });
    this.minDateValue = new Date("1920-01-01");
    this.maxDateValue = new Date();
  }

  ngOnInit(): void {
  }

  updateCertificateEdit() {

  }
}
