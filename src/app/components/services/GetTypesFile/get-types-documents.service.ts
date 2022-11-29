import {Injectable} from '@angular/core';
import {HttpService} from '../../../core/services/http/http.service';
import {Observable} from 'rxjs';
import {HttpApiResponse} from '../../../core/models/http-api-response';
import {TypeFile} from '../../../models/typeFile';
import {AppRoutes} from '../../../core/services/app-routes';

@Injectable({
  providedIn: 'root'
})
export class TypeFiles {

  url = `Access/login`;

  constructor(private server: HttpService<TypeFile>) {

  }


  getTypesDocument(): Observable<HttpApiResponse<TypeFile[]>> {
    return this.server.getList(AppRoutes.GET_TYPE_FILES);
  }

  private addTypFile(name: TypeFile) {
    return this.server.post(AppRoutes.POST_TYPE_FILE, name);
  }

}
