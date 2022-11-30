import {Injectable} from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {Program} from "../../../models/program";
import {Agreement} from "../../../models/agreement";
import {Observable} from "rxjs";
import {HttpApiResponse} from "../../../core/models/http-api-response";
import {AppRoutes} from "../../../core/services/app-routes";

@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  constructor(private server: HttpService<Agreement>) {
  }

  getAgreements(): Observable<HttpApiResponse<Agreement[]>> {
    return this.server.getList(AppRoutes.GET_AGREEMENTS);
  }

  addAgreement(newAgreement: Agreement){
    return this.server.post(AppRoutes.ADD_AGREEMENT, newAgreement)
  }
}
