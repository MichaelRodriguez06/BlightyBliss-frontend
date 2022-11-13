import { Injectable } from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {Student} from "../models/student";
import {Observable} from "rxjs";
import {HttpApiResponse} from "../../../core/models/http-api-response";
import {Access} from "../../../core/models/access";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = `Student`;

  constructor(
    private _http: HttpService<Student>
  ) { }

  public getStudentList(document_number: number): Observable<HttpApiResponse<Student[]>>{
    return this._http.getList(`${this.url}/${document_number}`)
  }

  public creatStudent(document_number: Student): Observable<HttpApiResponse<Student>>{
    return this._http.post(`${this.url}/newStudent`, document_number);
  }
}
