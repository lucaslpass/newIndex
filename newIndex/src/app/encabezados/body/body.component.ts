
import { Component, OnInit } from '@angular/core';
import { PROYECTO } from 'src/app/mock-proyectos';
import { Proyecto } from 'src/app/proyecto';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
proyectos=PROYECTO;
selectname?:Proyecto
_card= false;
_proyecto=[]
  constructor() {

  }

  ngOnInit(): void {
  }

 cardView( thisAction:boolean){
   this._card = thisAction;
   console.log("esto"+ thisAction
    )
 }
 selectCard(name:Proyecto){
  this.selectname= name;
  }
}
