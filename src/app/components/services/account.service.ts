import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppRoutes} from "../../core/services/app-routes";
import {Account} from "../../models/account";
import {Observable} from "rxjs";
import {HttpService} from "../../core/services/http/http.service";
import {HttpApiResponse} from "../../core/models/http-api-response";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = `Access/login`;

  constructor(private server: HttpService<Account>) {

  }

  addAccount(accountNew: Account): Observable<HttpApiResponse<Account>> {
    return this.server.post(`Access/newUser`, accountNew);
  }
}
