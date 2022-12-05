import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-agreement-crud',
  templateUrl: './agreement-crud.component.html',
  styleUrls: ['./agreement-crud.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class AgreementCreateComponent implements OnInit {
  agreementForm: FormGroup;

  constructor(private agreementFormfb: FormBuilder,) {
    this.agreementForm = this.agreementFormfb.group({
      agreements: this.agreementFormfb.array([this.agreementFormfb.group({agreement:['']})]),
      companyAgreements: this.agreementFormfb.array([this.agreementFormfb.group({companyName:['']})])
    });
  }

  ngOnInit(): void {
  }

  get getAgreements(){
    return this.agreementForm.get('agreements') as FormArray;
  }

  get getCompanyName(){
    return this.agreementForm.get('companyAgreements') as FormArray;
  }

  addAgreements() {
    const control = <FormArray>this.agreementForm.controls['agreements'];
    control.push(this.agreementFormfb.group({agreement:[]}))
  }

  addCompanyName() {
    const control = <FormArray>this.agreementForm.controls['companyAgreements'];
    control.push(this.agreementFormfb.group({companyName:[]}))
  }

  removeAgreements(index: number){
    const control = <FormArray>this.agreementForm.controls['agreements'];
    control.removeAt(index)
  }

  removeCompanyName(index: number) {
    const control = <FormArray>this.agreementForm.controls['companyAgreements'];
    control.removeAt(index)
  }

  summitChangesAgreements() {
  }

}
