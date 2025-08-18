import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationPatterns } from '../../consts/regex';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  alreadyhasAccount:boolean=true;
  loginForm!:FormGroup
  signUpForm!:FormGroup
  constructor(
   private _auth:AuthServiceService,
   private _route:Router ,
   private _snack:SnackBarService
  ) { }

  ngOnInit(): void {
    this.createLogin()
    this.createsignUp()
  }

  createLogin(){
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.pattern(ValidationPatterns.email)]),
      password:new FormControl(null,[Validators.required,Validators.pattern(ValidationPatterns.password)])
    })
  }

  createsignUp(){
    this.signUpForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.pattern(ValidationPatterns.email)]),
      password:new FormControl(null,[Validators.required,Validators.pattern(ValidationPatterns.password)]),
      userRole:new FormControl(null,[Validators.required])
    })
  }


 get f(){
   return this.loginForm.controls
  }

   get s(){
   return this.signUpForm.controls
  }

  onLogin(){
    if(this.loginForm.valid){
      let Obj=this.loginForm.value
      //api call to login 
      this._auth.login(Obj).subscribe({
        next:res=>{
          console.log(res);
          this._auth.saveToken(res.token)
          this._auth.saveUserRole(res.userRole)
          this._snack.openSnackBar(res.message)
          // after succesfull login navigate to dashboard

          this._route.navigate(['home'])
        },error:err=>{
          this._snack.openSnackBar(err.error.message)
        }
      })
    }

  }

  onSignUp(){
    if(this.signUpForm.valid){
      let val = this.signUpForm.value;
      console.log(val);

      this._auth.signUp(val)
      .subscribe({
        next:res=>{
          console.log(res);
          this.signUpForm.reset()
          // this.alreadyhasAccount=true
          this._snack.openSnackBar(res.message)
          
        },error:err=>{
          this._snack.openSnackBar(err.error.message)
          
        }
      })
      
    }
  }

 
}
