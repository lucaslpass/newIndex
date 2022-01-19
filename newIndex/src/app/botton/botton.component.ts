import { Component, OnInit } from '@angular/core';
import { BtnC } from '../btnc';

@Component({
  selector: 'app-botton',
  templateUrl: './botton.component.html',
  styleUrls: ['./botton.component.css']
})
export class BottonComponent implements OnInit {
btncs: BtnC[] =[

  {
    id: 11,
    href: "#",
    classA: "btn-div",
    class: "btn-img",
    src: "https://c0.klipartz.com/pngpicture/419/473/gratis-png-iconos-de-computadora-usuario-perfil-inicio-de-sesion-usuario.png",
    alt: "icono login"
  },
  {
  id: 12,
  href: "https://github.com/lucaslpass?tab=overview&from=2021-12-01&to=2021-12-31",
  classA: "btn-div",
  class: "btn-img",
  src: "https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png",
  alt: "icono github"
},
{
  id: 13,
  href: "#",
  class: "btn-img",
  classA: "btn-div",
  src: "https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png",
  alt: "icono gmail"
},
{
  id: 14,
  href: "#",
  class: "btn-img",
  classA: "btn-div",
  src: "https://freepikpsd.com/file/2019/10/linkedin-png-4-Transparent-Images.png",
  alt: "icono linkedin",
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
