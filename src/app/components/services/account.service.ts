import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppRoutes} from "../../core/services/app-routes";
import {Account} from "../../models/account";
import {Observable} from "rxjs";
import {HttpService} from "../../core/services/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = `Access/login`;

  constructor(private server: HttpService<Account>) {

  }

  addAccount(accountNew: Account) {
    this.server.post(`Access/login`, accountNew);
  }
}
