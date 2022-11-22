import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { HttpApiResponse } from '../../core/models/http-api-response';
import { TypeDocument } from '../../models/typeDocument';
import { AppRoutes } from '../../core/services/app-routes';

@Injectable({
  providedIn: 'root'
})
export class GetTypesDocuments {

  url = `Access/login`;

  constructor(private server: HttpService<TypeDocument[]>) {

  }

  getTypesDocument(): Observable<HttpApiResponse<TypeDocument[]>> {
    return this.server.get(AppRoutes.GET_TYPE_FILES);
  }

  updateDocument(formData: FormData) {
    // this.server.ge
  }

}
