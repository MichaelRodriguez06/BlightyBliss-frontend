import { Injectable } from '@angular/core';
import { Account } from '../../../models/account';
import { Observable } from 'rxjs';
import { HttpService } from '../../../core/services/http/http.service';
import { HttpApiResponse } from '../../../core/models/http-api-response';
import { AppRoutes } from '../../../core/services/app-routes';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = `Access/login`;

  constructor(private server: HttpService<Account>) {

  }
/*

  getAccounts(): Observable<HttpApiResponse<Account[]>>{
    return this.server.get('access');
  }
*/

  addAccount(accountNew: Account): Observable<HttpApiResponse<Account>> {
    return this.server.post(AppRoutes.CREATE_USER, accountNew);
  }
}
