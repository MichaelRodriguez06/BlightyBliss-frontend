import { Injectable } from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {Place} from "../../../models/place";
import {Observable} from "rxjs";
import {HttpApiResponse} from "../../../core/models/http-api-response";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  url = "places"

  constructor(private http: HttpService<Place>) { }

  public getPlace(idPlace: number): Observable<HttpApiResponse<Place>>{
    return this.http.get(`${this.url}/${idPlace}`);
  }

  public getCountries(): Observable<HttpApiResponse<Place[]>>{
    return this.http.getList(`${this.url}/countries`);
  }
}
