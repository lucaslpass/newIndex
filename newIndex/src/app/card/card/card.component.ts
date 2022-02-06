import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  _actionF=false;
  @Input()href="";
  @Input()src="";
  @Input()alt="";
  @Input()nameE="";
  @Input()exp="";
  @Output close= new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}

