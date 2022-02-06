import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-delete-back',
  templateUrl: './btn-delete-back.component.html',
  styleUrls: ['./btn-delete-back.component.css']
})

export class BtnDeleteBackComponent implements OnInit {

  @Input() _id="";

  @Output() editThis = new EventEmitter<string>();


  constructor() {

  }
  ngOnInit(): void {}

  editSelect(_id: string){
    this.editThis.emit( _id);
  }



  }


