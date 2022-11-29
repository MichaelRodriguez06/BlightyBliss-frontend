import {Injectable} from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {Disability} from "../../../models/disability";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpApiResponse} from "../../../core/models/http-api-response";
import {Access} from "../../../core/models/access";
import {StorageService} from "../../../core/services/storage/storage.service";
import {Const} from "../../../core/services/const";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DisabilitiesService {

  url = `Disabilities`;

  private disabilitySubject: BehaviorSubject<Disability[]>;
  public disabilityList: Observable<Disability[]>;

  public constructor(private _http: HttpService<Disability>) {
    const list:Disability[] = []
    this.disabilitySubject = new BehaviorSubject(list);
    this.disabilityList = this.disabilitySubject.asObservable();
  }

  public get getList(): Disability[] {
    return this.disabilitySubject.value;
  }

  public requestDisabilities(): Observable<HttpApiResponse<Disability[]>> {
    return this._http.getList(this.url).pipe(
      map(res => {
        if (res){
         this.disabilitySubject.next(res.data)
        }
        return res;
      })
    );
  }
}
