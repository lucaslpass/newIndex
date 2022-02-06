import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  _close=false;
  @Input()href="";
  @Input()src="";
  @Input()alt="";
  @Input()nameE="";
  @Input()exp="";
  @Output() thisNewAction =new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }
 closeCard( _close:boolean){
   this.thisNewAction.emit(_close )

 }
}

