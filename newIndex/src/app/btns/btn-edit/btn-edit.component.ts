import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.css']
})
export class BtnEditComponent implements OnInit {
  _action=true;
  @Output() thisAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  cardAction(_action: boolean){
    this.thisAction.emit(_action= false)
     console.log("aca " + _action)
  }

}
