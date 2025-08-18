import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _matSnack:MatSnackBar
  ) { }

  openSnackBar(msg:string){
    let matConfig:MatSnackBarConfig={
      duration:3000,
      horizontalPosition:'left',
      verticalPosition:'top'
    }
    this._matSnack.open(msg,"Close",matConfig)
  }
}
