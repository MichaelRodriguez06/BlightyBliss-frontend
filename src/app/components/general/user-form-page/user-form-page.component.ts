import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from "../../../models/user";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent implements OnInit {

  userForm:FormGroup;
  public editMode: boolean;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserFormPageComponent>,//Referencia al dialog usado
    @Inject(MAT_DIALOG_DATA) public data: { edit: boolean, user:User }//Datos del dialog
  ) {
    this.editMode = data.edit
    //Crea el formulario de usuario
    this.userForm = fb.group({
      id: [''],
      document: ['', Validators.required],
      full_name: ['', Validators.required],
      document_type: ['',  Validators.required],
      credentialId: ['', Validators.required],
      password: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required]
    })
    this.userForm.patchValue(data.user)
    if (this.editMode)
      this.userForm.removeControl('password')
  }

  ngOnInit(): void {}

  saveUser(): void {
    const id = this.userForm.get('id')?.value;
    const document = this.userForm.get('document')?.value;
    const full_name = this.userForm.get('full_name')?.value;
    const document_type = this.userForm.get('document_type')?.value;
    const credentialId = this.userForm.get('credentialId')?.value;
    const password = this.userForm.get('password')?.value;
    const city = this.userForm.get('city')?.value;
    const phone_number = this.userForm.get('phone_number')?.value;
    const address = this.userForm.get('address')?.value;
    const user: User = {id:parseInt(id) ,document: document.toString(),full_name,document_type,password,city,phone_number: phone_number.toString(), credentialId, address};
    this.dialogRef.close(user)
  }
}
