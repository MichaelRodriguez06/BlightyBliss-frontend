import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RecoverPasswordComponent>
  ) { }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close();
  }

  recoverPassword() {

  }
}
