import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iproduct } from "../models/product";
import { Observable } from "rxjs";
import { ProductServiceService } from "./product-service.service";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class ProductResolver implements Resolve<Iproduct[]>{
    constructor(
        private prodS:ProductServiceService
    ){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct[] | Observable<Iproduct[]>  {
        return this.prodS.fetchAllProducts()
    }
}