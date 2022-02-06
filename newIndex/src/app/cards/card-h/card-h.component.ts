import { Component, Input, OnInit } from '@angular/core';
import { CardH } from 'src/app/card-h';
import { CARDH } from 'src/app/mock-cardH';
import { CardHB } from 'src/app/card-hb';
@Component({
  selector: 'app-card-h',
  templateUrl: './card-h.component.html',
  styleUrls: ['./card-h.component.css']
})
export class CardHComponent implements OnInit {
cardHs=CARDH;

_edit="edit";
_all="_all";

  constructor() { }

  ngOnInit(): void {
  }

  editAction( editSelect:string){

   console.log("este es el mensaje" + editSelect)
 }
}
