import { Injectable } from '@angular/core';
import { CanLoad, Route, Router} from '@angular/router';
import { ApiAccessService } from "../services/apiAccess.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private route: Router, private apiAccessService: ApiAccessService) {
  }

  canLoad(route: Route) {
    const user = this.apiAccessService.userData;
    if (user){//Logged user
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }

}
