import {Injectable} from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {FilePending} from "../../../models/FilePending";
import {Observable} from "rxjs";
import {HttpApiResponse} from "../../../core/models/http-api-response";
import {TypeFile} from "../../../models/typeFile";
import {AppRoutes} from "../../../core/services/app-routes";

@Injectable({
  providedIn: 'root'
})
export class GetPendingFilesService {

  constructor(private server: HttpService<FilePending[]>) {
  }

  getPendingFiles(): Observable<HttpApiResponse<FilePending[]>> {
    return this.server.get(AppRoutes.GET_PENDING_FILE)
  }
}
