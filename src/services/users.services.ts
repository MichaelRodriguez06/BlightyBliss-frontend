import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from "../app/models/user";
import {environment} from "../environments/environment";
import {HttpResponse} from "../app/core/models/httpResponse";
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

  createUser(user: User): Observable<HttpResponse<User>> {
    headers['x-token'] = "Wasdfasdwa"
    return this.http.post<HttpResponse<User>>(this.url, user,{headers});
  }

  updateUser(user: User): Observable<HttpResponse<User>>{
    headers['x-token'] = this.accessService.userAccessData.token
    return this.http.put<HttpResponse<User>>(this.url+`/${user.id}`, user,{headers});
  }

  deleteUser(email: string): Observable<HttpResponse<User>> {
    return this.http.patch<HttpResponse<User>>(`${environment.apiUrl}/account/${email}`, {},{headers});
  }

  getUser(id: number): Observable<HttpResponse<User>>{
    headers['x-token'] = this.accessService.userAccessData.token
    return this.http.get<HttpResponse<User>>(this.url+`/${id}`,{headers});
  }

  getLoggedUser(){
    return this.getUser(this.accessService.userAccessData?.idAccount);
  }

  getUsers(): Observable<HttpResponse<any>> {
    headers['x-token'] = this.accessService.userAccessData.token
    return this.http.get<HttpResponse<User>>(this.url, {headers});
  }
}
