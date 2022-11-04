import { Injectable } from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {Folder} from "../models/folder";
import {Observable} from "rxjs";
import {HttpApiResponse} from "../../../core/models/http-api-response";
import {Access} from "../../../core/models/access";

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  url = `Folders`;

  constructor(
    private _http: HttpService<Folder>
  ) { }

  public getFolderList(folderId: number): Observable<HttpApiResponse<Folder[]>>{
    return this._http.getList(`${this.url}/${folderId}`)
  }

  public createFolder(folder: Folder): Observable<HttpApiResponse<Folder>>{
    return this._http.post(`${this.url}/newFolder`, folder);
  }
}
