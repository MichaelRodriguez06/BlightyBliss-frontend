import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  studentForm:FormGroup;
  public editMode: boolean;


  constructor(private fb: FormBuilder,) {
    this.editMode = true
    //Crea el formulario de usuario
    this.studentForm = fb.group({
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
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    const id = this.studentForm.get('id')?.value;
    const document = this.studentForm.get('document')?.value;
    const full_name = this.studentForm.get('full_name')?.value;
    const document_type = this.studentForm.get('document_type')?.value;
    const credentialId = this.studentForm.get('credentialId')?.value;
    const password = this.studentForm.get('password')?.value;
    const city = this.studentForm.get('city')?.value;
    const phone_number = this.studentForm.get('phone_number')?.value;
    const address = this.studentForm.get('address')?.value;
    const user: User = {
      id: parseInt(id),
      document: document.toString(),
      full_name,
      document_type,
      password,
      city,
      phone_number: phone_number.toString(),
      credentialId,
      address
    };

  }
}
