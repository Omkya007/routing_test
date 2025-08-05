import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   prodId!:string
   prodInfo!:Iproduct
  constructor(
    private _prodServ:ProductServiceService,
    private _snack:SnackBarService,
    private _active:ActivatedRoute,
    private _route:Router,
    private _matdialog:MatDialog
  ) { }

  ngOnInit(): void {
    // this.singleProd()
    this.single()
  }

  // singleProd(){
  //   this.prodId =this._active.snapshot.params['pid']
  //   console.log(this.prodId);
  //   if(this.prodId){
  //     this._prodServ.fetchDetails(this.prodId).subscribe({
  //     next:data=>{
  //       this.prodInfo=data
  //     },error:err=>{
  //       this._snack.openSnackBar(err)
  //     }
  //   })
  //   }
    
  // }

  single(){
    this._active.params.subscribe(param=>{
      this.prodId =param['pid']
      if(this.prodId){
        this._prodServ.fetchDetails(this.prodId).subscribe({
          next:data=>{
            this.prodInfo=data
          },error:err=>{
            return err
          }
        })
      }
    })
  }

  onRemove(){
    let mat_Config=new MatDialogConfig()
    mat_Config.width='600px'
    mat_Config.maxHeight='90%'
    mat_Config.disableClose=true
    mat_Config.data=`Are You sure you want to remove this ${this.prodInfo.pname} product?`
    let mat_Dailog =this._matdialog.open(GetConfirmComponent,mat_Config)
    mat_Dailog.afterClosed()
    .subscribe(res=>{
      if(res){
        this._prodServ.onProdRem(res)
        this._snack.openSnackBar(`The product ${this.prodInfo.pname} has been removed successfully`)
        this._route.navigate(['products'])
      }
    })

  }

  onEditNavigate(){
    // naviget to porductform

    
    // this._route.navigate(['products',this.prodId,'edit'])
    this._route.navigate(['edit'],{
      relativeTo:this._active,
      queryParamsHandling:'preserve'
    })

  }

}
