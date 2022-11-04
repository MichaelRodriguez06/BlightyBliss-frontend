import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiAccessService} from "../../../modules/access/services/api-access.service";
import * as Console from "console";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";


@Component({
  selector: 'app-account-register-form',
  templateUrl: './account-register-form.component.html',
  styleUrls: ['./account-register-form.component.css']
})
export class AccountRegisterFormComponent implements OnInit {

  form: FormGroup;
  passwordUser?: string;
  confirmPassword?: string;
  name?: string;
  lastname?: string;
  docType?: string;
  email?: string;
  accountType?: string;
  personType?: string;


  constructor(
    private fb: FormBuilder,
    private apiAccessService: ApiAccessService,
    private serviceAccount: AccountService
  ) {
    if (this.apiAccessService.userAccessData) {//user logged

    }
    this.form = fb.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        docType: ['', Validators.required],
        docNumber: ['', Validators.required],
        personType: ['', Validators.required],
        accountType: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }
    );

  }

  ngOnInit(): void {
  }

  registerAccount() {
    const formRegister = this.form.value;
    // this.serviceAccount.addAccount();
  }

  selectUserType(event: Event) {
    this.personType = (<HTMLInputElement>event.target).value;
  }

  selectDocType(event: Event) {
    this.docType = (<HTMLInputElement>event.target).value;
  }

  selectAccountType(event: Event) {
    this.accountType = (<HTMLInputElement>event.target).value;
  }

}
