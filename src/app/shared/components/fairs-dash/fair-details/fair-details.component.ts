import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifair } from 'src/app/shared/models/fair';
import { FairServiceService } from 'src/app/shared/services/fair-service.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.css']
})
export class FairDetailsComponent implements OnInit {

  fairobj!:Ifair
  fairId!:string
  constructor(
    private _fiarS:FairServiceService,
    private _active:ActivatedRoute
  ) { }

  ngOnInit(): void {

 this._active.params.subscribe(param=>{
  this.fairId=param['fairId']
  if(this.fairId){
    this._fiarS.fecthSingle(this.fairId).subscribe({
      next:data=>{
        this.fairobj=data
      },error:err=>{
        console.log(err);
        
      }
    })
  }
 })

  }

}
