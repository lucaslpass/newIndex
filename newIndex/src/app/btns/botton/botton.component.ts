import { Component, OnInit } from '@angular/core';
import { BtnC } from 'src/app/btnc';
import { BTNC } from 'src/app/mock-btncs';
@Component({
  selector: 'app-botton',
  templateUrl: './botton.component.html',
  styleUrls: ['./botton.component.css']
})
export class BottonComponent implements OnInit {
btncs= BTNC;

  constructor() { }

  ngOnInit(): void {
  }

}
