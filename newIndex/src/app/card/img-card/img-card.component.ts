import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  class="card-img";
  _action=false;


  @Input() src="";
  @Input() alt="";
  @Input() title="";

  @Output() thisAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  cardAction(_action: boolean){
  this.thisAction.emit(_action= true)
   console.log("aca " + _action)
}

}
