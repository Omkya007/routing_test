import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild{

  constructor(
    private _authS:AuthServiceService,
    private _route:Router
  ){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   //is mthd ne true return kiya >> naviget to home
   //else return false then naviget to login
   if(this._authS.getToken()){
      return true
   }else{
    
   return this._route.createUrlTree([''])

   }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._authS.getToken()){
      return true
   }else{
    
   return this._route.createUrlTree([''])

   }
  }
  
}
