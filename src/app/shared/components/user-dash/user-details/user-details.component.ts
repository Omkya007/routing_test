import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

 userId!:string
 userInfo!:Iuser;
 
  constructor(
    private _active:ActivatedRoute,
    private _user:UsersService,
    private _route:Router,
    private _snack:SnackBarService,
    private _matdialog:MatDialog
  ) { }

  ngOnInit(): void {
   
    // this.userId =this._active.snapshot.params['userId']
    // if(this.userId){
    //   this._user.getUserDetails(this.userId)
    //   .subscribe({
    //     next:(data=>{
    //       this.userInfo =data
    //     }),error(err) {
    //       return err
    //     },
    //   })
    // }


    this._active.params.subscribe(param=>{
      this.userId =param['userId']
      if(this.userId){
        this._user.getUserDetails(this.userId).subscribe({
          next:data=>{
            this.userInfo=data
          },error:err=>{
            return err
          }
        })
      }
    })
  }

  onRemove() {
    let mat_Config=new MatDialogConfig()
    mat_Config.width='600px'
    mat_Config.maxHeight='90%'
    mat_Config.disableClose=true
    mat_Config.data=`Are You sure ,you want to remove ${this.userInfo.username} user?`
  let mat_Dialog=  this._matdialog.open(GetConfirmComponent,mat_Config)
  mat_Dialog.afterClosed()
  .subscribe(res=>{
    if(res){
      this._user.removeUser(this.userInfo)
      this._snack.openSnackBar(`the user ${this.userInfo.username} has been removed successfully`)
      this._route.navigate(['users'])
    }
  })
}
}
