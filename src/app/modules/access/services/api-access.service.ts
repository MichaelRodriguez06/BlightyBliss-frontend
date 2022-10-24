import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpService} from "../../../core/services/http/http.service";
import {StorageService} from "../../../core/services/storage/storage.service";
import {Access} from "../../../core/models/access";
import {Const} from "../../../core/services/const";
import * as Console from "console";
import {HttpResponse} from "../../../core/models/httpResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService{

  url = `Access/login`;

  private userSubject: BehaviorSubject<Access>;
  public userAccess: Observable<Access>;

  public get userAccessData(): Access{
    return this.userSubject.value;
  }

  public constructor(private _storage: StorageService, private _http: HttpService<Access>) {
    this.userSubject = new BehaviorSubject<Access>(_storage.getCookie(Const.ACCESS_COOKIE)!);
    this.userAccess = this.userSubject.asObservable();
  }

  login(email: string, password: string): Observable<HttpResponse<Access>>{
    return this._http.post(this.url, {email, password}).pipe(
      map(res =>{
        if (res){
          const user: Access = res.data;
          this._storage.setCookie(Const.ACCESS_COOKIE, JSON.stringify(user))
          this.userSubject.next(user)
        }
        return res;
      })
    );
  }

  logout() {
    // removes user from local storage and set current user to null
    this._storage.deleteCookie(Const.ACCESS_COOKIE);
  }
}
