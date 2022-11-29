import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http/http.service';
import { Observable } from 'rxjs';
import { HttpApiResponse } from '../../../core/models/http-api-response';
import { TypeFile } from '../../../models/typeFile';
import { AppRoutes } from '../../../core/services/app-routes';

@Injectable({
  providedIn: 'root'
})
export class TypeFiles {

  url = `Access/login`;

  constructor(private server: HttpService<TypeFile[]>) {

  }


  getTypesDocument(): Observable<HttpApiResponse<TypeFile[]>> {
    return this.server.get(AppRoutes.GET_TYPE_FILES);
  }


  addTypeFile(newTypeFile: TypeFile[]) {
    for (let i = 0; i < newTypeFile.length; i++) {
      this.addTypFile(newTypeFile[i].name);
    }

  }

  private addTypFile(name: string) {
    return this.server.post(AppRoutes.POST_TYPE_FILE, name);
  }

}
