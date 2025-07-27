import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.css']
})
export class GetConfirmComponent implements OnInit {

  msg!:string
  constructor(
    private _matDialogRef:MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA)getMsg:string
  ) { }

  ngOnInit(): void {

  }
  OnClose(flag:boolean) {
    this._matDialogRef.close(flag)
}

}
