import {Injectable} from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {HttpApiResponse} from "../../../core/models/http-api-response";
import {Observable} from "rxjs";
import {AppRoutes} from "../../../core/services/app-routes";
import {AccountTemplate} from "../../../models/AccountTemplate";

@Injectable({
  providedIn: 'root'
})
export class GetAccountsService {

  constructor(private server: HttpService<AccountTemplate>) {

  }

  getAccounts(): Observable<HttpApiResponse<AccountTemplate[]>> {
    return this.server.getList(AppRoutes.GET_LIST_ACCOUNTS);
  }

}
