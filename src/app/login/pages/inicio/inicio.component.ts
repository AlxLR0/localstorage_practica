import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  faltaDatos: boolean = false;
  correoInvalido: boolean = false;
  usuarioNoEncontrado: boolean = false;
  contrasenaIncorrecta: boolean = false; // Variable para controlar la visibilidad de la alerta de contraseña incorrecta
  mensajeError: string = '';

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  onSubmit(form: NgForm): void {
    const correo = form.controls['correo'].value;
    const contrasena = form.controls['contrasena'].value;
    
    if (!correo || !contrasena) {
      this.faltaDatos = true;
      setTimeout(() => {
        this.faltaDatos = false;
      }, 3000);
      return;
    }

    if (!this.validarCorreo(correo)) {
      this.correoInvalido = true;
      setTimeout(() => {
        this.correoInvalido = false;
      }, 3000);
      return;
    }

    const usuarioExiste = this.usuariosService.usuarioExiste(correo);

    if (usuarioExiste) {
      const inicioSesionExitoso = this.usuariosService.iniciarSesion(correo, contrasena);

      if (inicioSesionExitoso) {
         // Almacenar el correo electrónico en localStorage y despues recperar el nombre de usuario y mostrarlos en el dashboard
         localStorage.setItem('correoUsuario', correo);
        //para redirigir a otro componente cuando el usuario haga login
        this.router.navigate(['/dashboard']);
      } else {
        this.contrasenaIncorrecta = true; //variable para mostrar la alerta de contraseña incorrecta
        setTimeout(() => {
          this.contrasenaIncorrecta = false; // Oculta la alerta después de un tiempo
        }, 3000);
      }
    } else {
      this.usuarioNoEncontrado = true;
      setTimeout(() => {
        this.usuarioNoEncontrado = false;
      }, 3000);
      this.mensajeError = 'Usuario no encontrado';
    }
  }

  validarCorreo(correo: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(correo);
  }
}
