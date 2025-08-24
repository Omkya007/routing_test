import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../models/product';
import { ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class NewProdResolver implements Resolve<Array<Iproduct>|Iproduct> {
  constructor(
    private _prodS:ProductServiceService
  ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Iproduct>|Iproduct> {
   
    let prodId=route.paramMap.get('pid')
    //if current route has pid then fetch single prod
    if(prodId){
     return this._prodS.fetchDetails(prodId)
    }else{
//fetch all prod array
      return this._prodS.fetchAllProducts()
    }
    
  }
}
