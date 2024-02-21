import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: "inicio",
        component: InicioComponent
        
      },
      {
        path: "registro",
        component: RegistroComponent
        
      },
      {
        path: "recuperar",
        component: RecuperarComponent
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
