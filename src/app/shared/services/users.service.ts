import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 users:Array<Iuser>= [
  {
    username: "john_doe",
    userid: '101',
    userrole:'candidate' ,
    userImageUrl: "https://i.pravatar.cc/150?img=1"
  },
  {
    username: "jane_smith",
    userid: '102',
    userrole: "candidate",
    userImageUrl: "https://i.pravatar.cc/150?img=2"
  },
  {
    username: "rahul_kumar",
    userid: '103',
    userrole: "super_admin",
    userImageUrl: "https://i.pravatar.cc/150?img=3"
  },
  {
    username: "lisa_ray",
    userid: '104',
    userrole: "admin",
    userImageUrl: "https://i.pravatar.cc/150?img=4"
  }
];

  constructor() { }

  fetchAllUser():Observable<Iuser[]>{
    return of(this.users)

  }

  getUserDetails(id:string):Observable<Iuser>{
    let userObj = this.users.find(user=> user.userid ===id) as Iuser
    return of(userObj)
            
  }

  addNew(userObj:Iuser){
    this.users.push(userObj)
  }

  updateUser(userObj:Iuser){
    let getIndex =this.users.findIndex(user=> user.userid ===userObj.userid);
    console.log(getIndex);
    
    this.users[getIndex]=userObj
  }
  removeUser(userObj:Iuser){
    let getIndex =this.users.findIndex(user=> user.userid===userObj.userid)
    this.users.splice(getIndex,1)
  }
}
