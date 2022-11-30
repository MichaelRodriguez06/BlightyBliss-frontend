import {Injectable} from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {TypeFile} from "../../../models/typeFile";
import {Program} from "../../../models/program";
import {Observable} from "rxjs";
import {HttpApiResponse} from "../../../core/models/http-api-response";
import {AppRoutes} from "../../../core/services/app-routes";

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private server: HttpService<Program>) {
  }

  getPrograms(): Observable<HttpApiResponse<Program[]>> {
    return this.server.getList(AppRoutes.GET_PROGRAMS);
  }

  addProgram(newProgram: Program) {
    this.server.post(AppRoutes.ADD_PROGRAM, newProgram);
  }

}
