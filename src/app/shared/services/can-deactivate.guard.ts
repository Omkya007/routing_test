import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductFormComponent } from '../components/product-dash/product-form/product-form.component';
import { IcanDeactivate } from '../models/candeactivate';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<IcanDeactivate> {
  canDeactivate(
    component: IcanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate()
  }
  
}
