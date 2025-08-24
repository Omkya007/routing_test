import { Inject, Injectable } from '@angular/core';
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
export class SingleProductResolver implements Resolve<Iproduct> {

  constructor(
    private _prodSer:ProductServiceService
  ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct> {
   
   //get prodId from params>> activatedRoute
    let prodId=route.params['pid']

    // let prodId=route.paramMap.get('pid')



   //api call to fetch single prod 

  return this._prodSer.fetchDetails(prodId)
   
  }
}
