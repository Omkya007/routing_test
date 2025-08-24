import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivate } from 'src/app/shared/models/candeactivate';
import { Iuser } from 'src/app/shared/models/user';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit ,IcanDeactivate{


  isEdit:boolean=false
  userId!:string
  userForm!:FormGroup
  editUser!:Iuser
  userRole!:string
  updateBtn:boolean=false
  constructor(
    private _active:ActivatedRoute,
    private _uuid:UuidService,
    private _user:UsersService,
    private _route:Router,
    private _snack:SnackBarService
  ) { }

  ngOnInit(): void {
    this.createUser()
    this.getUserParams()
  this.userRole=  this._active.snapshot.queryParams['userRole']
  if(this.userRole && this.userRole=='candidate'){
      this.userForm.disable()
      this.updateBtn=true
  }
    
    
  }

  createUser(){
    this.userForm = new FormGroup({
      username:new FormControl(null,[Validators.required]),
      userrole:new FormControl(null,[Validators.required])
    })
  }


  getUserParams(){
     this.userId = this._active.snapshot.params['userId'];
    console.log(this.userId);
    if(this.userId){
      this.isEdit=true
      this._user.getUserDetails(this.userId)
      .subscribe({
        next:data=>{
          this.editUser=data
          console.log(this.editUser);
          
          this.userForm.patchValue(this.editUser)
        },
        error:err=> console.log(err),
        
      })
    }
  }

  
  onUserAdd() {
    if(this.userForm.valid){
      let obj:Iuser={...this.userForm.value, userid :this._uuid.generateUuid()}
      console.log(obj);
      this.userForm.reset();
      this._user.addNew(obj)
      this._snack.openSnackBar(`The user ${obj.username} added successfully`)
      this._route.navigate(['users'])
    }

  

   
}

  onUpdate(){
    if(this.userForm.valid){
      let update_user:Iuser={...this.userForm.value, userid:this.userId}
      console.log(update_user);
      this.userForm.reset();
      this._user.updateUser(update_user);
      this._snack.openSnackBar(`The user ${update_user.username} has been updated successfully`)
      
      this._route.navigate(['users'])
      this.isEdit=false
    }

  
  }

  canDeactivate(){
    //if form is edited and not submitted
    //return false


    //if form is dirty but updated
    //return true
    if(this.userForm.dirty && this.isEdit){
      let getConfirm=confirm(`Are you sure you want to discard the changes`)
      return getConfirm
  }
  return true

}
}
