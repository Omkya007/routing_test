import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../models/user';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
 userArr:Array<Iuser>=[]
  constructor(
    private _userSer:UsersService
  ) { }

  ngOnInit(): void {

    this.getAllUser()
  }

  getAllUser(){
    this._userSer.fetchAllUser().subscribe({
      next:data=>{
        this.userArr =data
      },error(err) {
        return err
      },
    })
  }

}
