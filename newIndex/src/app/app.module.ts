import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from'@angular/forms';

import { AppComponent } from './app.component';
import { BottonComponent } from './btns/botton/botton.component';
import { HeaderComponent } from './encabezados/header/header.component';
import { BodyComponent } from './encabezados/body/body.component';
import { LoginComponent } from './cards/login/login.component';
import { BtnEditComponent } from './btns/btn-edit/btn-edit.component';
import { CardHComponent } from './cards/card-h/card-h.component';
import { BtnDeleteBackComponent } from './btns/btn-delete-back/btn-delete-back.component';
import { BtnSubComponent } from './btns/btn-sub/btn-sub.component';
import { CardHBComponent } from './cards/card-hb/card-hb.component';
import { ProyectosComponent } from './cards/proyectos/proyectos.component';
import { ImgComponent } from './constructor/img/img.component';
import { TextComponent } from './constructor/text/text.component';
import { TitleComponent } from './constructor/title/title.component';
import { ExpComponent } from './constructor/exp/exp.component';
import { ImgCardComponent } from './card/img-card/img-card.component';
import { CardEditComponent } from './card/card-edit/card-edit.component';
import { CardComponent } from './card/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    BottonComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,

    BtnEditComponent,
    CardHComponent,

    BtnDeleteBackComponent,
     BtnSubComponent,
     CardHBComponent,
     ProyectosComponent,
     ImgComponent,

     TextComponent,
     TitleComponent,
     ExpComponent,
     ImgCardComponent,
     CardEditComponent,
     CardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
