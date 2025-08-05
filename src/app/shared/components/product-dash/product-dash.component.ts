import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductServiceService } from '../../services/product-service.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.css']
})
export class ProductDashComponent implements OnInit {

  productArr!:Array<Iproduct>
  constructor(
    private _product:ProductServiceService,
    private _snack:SnackBarService,
    private _route:Router
  ) { }

  ngOnInit(): void {
    this.getproductall()
  }

  getproductall(){
    this._product.fetchAllProducts().subscribe({
      next:data=>{
        this.productArr=data
        console.log((this.productArr));
        
      },
      error:err=>{
        this._snack.openSnackBar(`The error ocuured ${err}`)
      }
    })
  }

  onProd(prod:Iproduct){
    this._route.navigate(['products',prod.pid],{
      queryParams:{canEdit:prod.canreturn},
      
    })
  }

}
