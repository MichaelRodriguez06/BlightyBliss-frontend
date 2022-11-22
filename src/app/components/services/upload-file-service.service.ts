import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { TemplateFile } from '../../models/TemplateFile';
import { Observable } from 'rxjs';
import { HttpApiResponse } from '../../core/models/http-api-response';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private server: HttpService<TemplateFile>) {
  }

  uploadFile(file: FormData): Observable<HttpApiResponse<TemplateFile>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'reportProgress': 'true'
      })
    };
    return this.server.postFile(`Files/upload`, file);
  }

}
