import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IloginUser, IregisterUser } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  Auth_Base_Url:string=environment.authBaseUrl;

  userLoginStatus:boolean=false
  constructor(private http:HttpClient) { }

  login(userDetails:IloginUser):Observable<any>{
    //api call >> store JWT token in LS
   let Login_url=`${this.Auth_Base_Url}api/auth/login`
    return this.http.post(Login_url,userDetails)

    
  }

  signUp(userDetails:IregisterUser):Observable<any>{

    let Sign_url=`${this.Auth_Base_Url}api/auth/register`
  return this.http.post(Sign_url,userDetails)
  }

   saveToken(token:string){
    localStorage.setItem('token',token)
  }

  saveUserRole(userRole:string){
    localStorage.setItem('userRole',userRole)
  }

  getUserRole(){
    return localStorage.getItem('userRole')
  }

  getToken():boolean{
    return !!localStorage.getItem('token')
  }


}
