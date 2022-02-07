import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  _edit="edit";
  _all="_all";

  @Input()href="";
  @Input()src="";
  @Input()alt="";
  @Input()nameE="";
  @Input()exp="";

  constructor() { }

  ngOnInit(): void {
  }
  editAction( editSelect:string){

    console.log("este es el mensaje" + editSelect)
  }

}
