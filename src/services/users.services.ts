import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from "../app/models/user";
import {environment} from "../environments/environment";
import {HttpApiResponse} from "../app/core/models/http-api-response";
import {ApiAccessService} from "../app/modules/access/services/api-access.service";

const headers = {
  'Content-Type': 'application/json',
  'x-token': ''
};

@Injectable({
  providedIn: 'root'
})
export class UsersServices {

  url = `${environment.apiUrl}/users`;

  constructor(
    private http: HttpClient,
    private accessService: ApiAccessService
  ) {}

  printUser(user: User) {
    console.log(user)
  }

  createUser(user: User): Observable<HttpApiResponse<User>> {
    headers['x-token'] = "Wasdfasdwa"
    return this.http.post<HttpApiResponse<User>>(this.url, user,{headers});
  }

  updateUser(user: User): Observable<HttpApiResponse<User>>{
    headers['x-token'] = this.accessService.userAccessData.token
    return this.http.put<HttpApiResponse<User>>(this.url+`/${user.id}`, user,{headers});
  }

  deleteUser(email: string): Observable<HttpApiResponse<User>> {
    return this.http.patch<HttpApiResponse<User>>(`${environment.apiUrl}/account/${email}`, {},{headers});
  }

  getUser(id: number): Observable<HttpApiResponse<User>>{
    headers['x-token'] = this.accessService.userAccessData.token
    return this.http.get<HttpApiResponse<User>>(this.url+`/${id}`,{headers});
  }

  getLoggedUser(){
    return this.getUser(this.accessService.userAccessData?.idAccount);
  }

  getUsers(): Observable<HttpApiResponse<any>> {
    headers['x-token'] = this.accessService.userAccessData.token
    return this.http.get<HttpApiResponse<User>>(this.url, {headers});
  }
}
