import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { HttpApiResponse } from '../../core/models/http-api-response';
import { TypeDocument } from '../../models/typeDocument';

@Injectable({
  providedIn: 'root'
})
export class GetTypesDocuments {

  url = `Access/login`;

  constructor(private server: HttpService<TypeDocument[]>) {

  }

  getTypesDocument(): Observable<HttpApiResponse<TypeDocument[]>> {
    return this.server.get(`FileType/false`);
  }

  updateDocument(formData: FormData) {
    // this.server.ge
  }

}
