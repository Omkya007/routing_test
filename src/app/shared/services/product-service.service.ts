import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 products:Array<Iproduct> = [
  {
    pid: "123",
    pname: "iphone 14",
    pstatus: "delivered",
    canreturn: 1
  },
  {
    pid: "124",
    pname: "samsung galaxy s22",
    pstatus: "in progress",
    canreturn: 0
  },
  {
    pid: "125",
    pname: "oneplus nord ce 3",
    pstatus: "dispatched",
    canreturn: 1
  },
  {
    pid: "126",
    pname: "xiaomi redmi note 12",
    pstatus: "delivered",
    canreturn: 1
  }
];


  constructor() { }

  fetchAllProducts():Observable<Iproduct[]>{
    return of(this.products)
  }

  fetchDetails(id:string){
    let prod:Iproduct=this.products.find(prod=> prod.pid===id)!
    return of(prod)
  }

  onProdAdd(prodObj:Iproduct):Observable<Iproduct>{
    this.products.push(prodObj)
    return of(prodObj)
  }

  onProdUp(prodObj:Iproduct):Observable<Iproduct>{
    let getIndex =this.products.findIndex(prod=> prod.pid=== prodObj.pid)
    this.products[getIndex]=prodObj
    return of(prodObj)
  }

  onProdRem(prodObj:Iproduct){
    let getIndex =this.products.findIndex(prod=> prod.pid===prodObj.pid)
    this.products.splice(getIndex,1)
  }
}
