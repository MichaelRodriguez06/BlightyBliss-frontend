import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiAccessService } from '../../../modules/access/services/api-access.service';
import { AccountService } from '../../services/account.service';
import { NotificationService } from '../../../core/services/notification/notification.service';
import { Account } from '../../../models/account';


@Component({
  selector: 'app-account-register-form',
  templateUrl: './account-register-form.component.html',
  styleUrls: ['./account-register-form.component.css',
    '../../../../../node_modules/primeflex/primeflex.css',
    '../../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class AccountRegisterFormComponent implements OnInit {

  form: FormGroup;
  typeAccount: FormGroup;
  personType: FormGroup;
  docType: FormGroup;
  value1: number| undefined;
  stateOptions: any[];
  userType: string= "";
  passsword:string="";
  passwordConfirmation:string="";
  selectedCategory: any = null;
  categories: any[] = [{name: 'CC', key: 'CC'}, {name: 'TI', key: 'TI'}, {name: 'CE', key: 'CE'}];


  constructor(
    private fb: FormBuilder,
    private apiAccessService: ApiAccessService,
    private serviceAccount: AccountService,
    private notification: NotificationService
  ) {
      this.stateOptions = [{label: 'Admin', value: 'admin '}, {label: 'User', value: 'user'}];

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
    this.selectedCategory = this.categories[1];
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
