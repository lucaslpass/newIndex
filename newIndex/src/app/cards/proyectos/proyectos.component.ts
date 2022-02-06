import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { PROYECTO } from 'src/app/mock-proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos = PROYECTO;
  _edit="edit";
  _all="_all";
  constructor() { }

  ngOnInit(): void {
  }
  editAction( editSelect:string){

    console.log("este es el mensaje" + editSelect)
  }

}
