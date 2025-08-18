import { Component, OnInit } from '@angular/core';
import { Ifair } from '../../models/fair';
import { FairServiceService } from '../../services/fair-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs-dash',
  templateUrl: './fairs-dash.component.html',
  styleUrls: ['./fairs-dash.component.css']
})
export class FairsDashComponent implements OnInit {

  selectedId!:string
  fairAr!:Array<Ifair>
  constructor(
    private _fairsS:FairServiceService,
    private _active:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.fetchFairs()
  }

  fetchFairs(){
  this.fairAr=  this._fairsS.fecthAllFairs()
  this._router.navigate([this.fairAr[0].fairId],{
    relativeTo:this._active
  })
  }

}
