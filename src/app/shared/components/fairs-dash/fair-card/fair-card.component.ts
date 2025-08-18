import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from 'src/app/shared/models/fair';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.css']
})
export class FairCardComponent implements OnInit {

  @Input()selectedFair!:string
  @Input()fairObj!:Ifair
  constructor() { }

  ngOnInit(): void {
    console.log(this.fairObj);
    
  }

}
