import { Injectable } from '@angular/core';
import { CanLoad, Route, Router} from '@angular/router';
import { ApiAccessService } from "../../modules/access/services/api-access.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private route: Router, private apiAccessService: ApiAccessService) {
  }

  canLoad(route: Route) {
    const user = this.apiAccessService.userAccessData;
    if (user){//Logged user
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }

}
