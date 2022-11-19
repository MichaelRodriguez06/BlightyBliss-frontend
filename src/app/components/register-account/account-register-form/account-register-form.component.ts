import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiAccessService } from '../../../modules/access/services/api-access.service';
import { AccountService } from '../../services/account.service';
import { NotificationService } from '../../../core/services/notification/notification.service';
import { Account } from '../../../models/account';


@Component({
  selector: 'app-account-register-form',
  templateUrl: './account-register-form.component.html',
  styleUrls: ['./account-register-form.component.css']
})
export class AccountRegisterFormComponent implements OnInit {

  form: FormGroup;
  typeAccount: FormGroup;
  personType: FormGroup;
  docType: FormGroup;


  constructor(
    private fb: FormBuilder,
    private apiAccessService: ApiAccessService,
    private serviceAccount: AccountService,
    private notification: NotificationService
  ) {
    if (this.apiAccessService.userAccessData) {//user logged

    }

    this.typeAccount = new FormBuilder().group({});
    this.personType = new FormBuilder().group({});
    this.docType = new FormBuilder().group({});
    this.form = fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        docType: ['', Validators.required],
        docNumber: ['', Validators.required],
        personType: ['', Validators.required],
        accountType: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
      }
    );

  }

  ngOnInit(): void {
  }

  registerAccount() {
    const formRegister: Account = this.form.value;
    if ((this.form.get('password')?.value) == (this.form.get('confirmPassword')?.value)) {
      formRegister.docNumber = String(formRegister.docNumber);
      this.serviceAccount.addAccount(formRegister).subscribe({
        next: (res) => {
          if (res) {
            this.notification.showsSuccess(res.message);
          } else {
            this.notification.showsInfo(res);
          }
        },
        error: err => {
          if (err.status === 401 || err.status === 403 || err.status === 400) {
            this.notification.showsError(err.error.message);
          }
        }

      });
    } else {
      this.notification.showsError('Passwords dont match');
    }

  }


}
