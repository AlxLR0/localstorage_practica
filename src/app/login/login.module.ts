import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    RegistroComponent,
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule 
  ]
})
export class LoginModule { }
