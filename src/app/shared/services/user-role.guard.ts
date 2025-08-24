import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  private _auth=inject(AuthServiceService)
  private _snack=inject(SnackBarService)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 

     let arrUSerrole:Array<string>=route.data['userRole']
     let loginUser:string=this._auth.getUserRole()!
     
     if(arrUSerrole.includes(loginUser)){
      return true
     }else{
      this._snack.openSnackBar(`You are not authorised person to login`)
      return false 
     }
  }
  
}
