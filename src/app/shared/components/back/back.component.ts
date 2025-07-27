import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common';
@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {


  constructor(
    private _location:Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
this._location.back()
}

}
