import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

 isEdit:boolean=false
 prodForm!:FormGroup
 prodId!:string
 prodObj!:Iproduct
 canEdit!:string
 updateBtn:boolean=false
  constructor(
    private _active:ActivatedRoute,
    private _productSer:ProductServiceService,
    private _route:Router,
    private _snack:SnackBarService,
    private _uuid:UuidService
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.editMode()
    
    this._active.queryParams.subscribe((param:Params)=>{
      console.log(param);
      this.canEdit=param['canEdit']
      if(this.canEdit && this.canEdit==='0'){
        this.prodForm.disable()
        this.updateBtn=true
      }
      
    })
  }

  createForm(){
    this.prodForm=new FormGroup({
      pname:new FormControl(null,[Validators.required]),
      pstatus:new FormControl(null,[Validators.required]),
      canreturn:new FormControl(0)
    })
  }

  editMode(){
      
    this.prodId =this._active.snapshot.params['pid']
    console.log(this.prodId);
    if(this.prodId){
        this.isEdit=true
        this._productSer.fetchDetails(this.prodId).subscribe({
      next:data=>{
        this.prodObj=data
        this.prodForm.patchValue(this.prodObj)
      },error:err=>{
        this._snack.openSnackBar(err)
      }
    })
    }
  }

  onAdd(){
    if(this.prodForm.valid){
      let Obj:Iproduct={
        ...this.prodForm.value,pid:this._uuid.generateUuid()
      }
      this._productSer.onProdAdd(Obj).subscribe({
        next:data=>{
          console.log(data);
          
        },error:err=>{
          return err
        }
      })
      this.prodForm.reset()
      this._route.navigate(['products'])
      this._snack.openSnackBar(`The product ${this.prodObj.pname} has been added successfully`)
      
    }
  }

  onUpdate(){
    if(this.prodForm.valid){
      let updated:Iproduct={
        ...this.prodForm.value,pid:this.prodId
      }
      this._productSer.onProdUp(updated).subscribe({
        next:data=>{
          console.log(data);
          
        }
      })
      this.prodForm.reset()
      this._route.navigate(['products'])
      this._snack.openSnackBar(`This product ${updated.pname} is updated  successfully`)
    }
  }
  

}
function params(value: Params): void {
  throw new Error('Function not implemented.');
}

