import { Injectable } from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {HttpApiResponse} from "../../../core/models/http-api-response";
import {Level} from "../../../models/level";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  url = "levels"

  constructor(private _http: HttpService<Level>) { }

  public getLevels(): Observable<HttpApiResponse<Level[]>>{
    return this._http.getList(this.url);
  }
}
