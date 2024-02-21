import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroExitoso: boolean = false; // atributo para controlar el estado de la alerta
  faltaDatos: boolean = false;
  correoInvalido: boolean = false; // atributo para controlar la alerta de correo inválido

  constructor(private usuariosService: UsuariosService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Formulario:', form.value);

      const { usuario, correo, contrasena } = form.value;
      // Verificar los valores en el form imprimiendo los usuarios en la consola
      console.log('Valores:', usuario, correo, contrasena);

      if (this.validarCorreo(correo)) { // Validar el formato del correo electrónico

        this.usuariosService.registrarUsuario(usuario, correo, contrasena);
        form.reset();
        this.registroExitoso = true;

        setTimeout(() => {
          this.registroExitoso = false;
        }, 3000);

      } else {

        this.correoInvalido = true;
        setTimeout(() => {
          this.correoInvalido = false;
        }, 3000);
      }

    } else {

      this.faltaDatos = true; // Mostrar la alerta de advertencia
      setTimeout(() => {
        this.faltaDatos = false; // Ocultar la alerta después de unos segundos
      }, 3000);
    }
  }

  validarCorreo(correo: string): boolean {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(correo);
  }

    // onSubmit(form: NgForm): void {
  //   console.log('Formulario:', form.value); // Agregamos este console.log para verificar los valores del formulario
  //   const { usuario, correo, contrasena } = form.value;
  //   console.log('Valores:', usuario, correo, contrasena); // Agregamos este console.log para verificar los valores extraídos del formulario
  //   this.usuariosService.registrarUsuario(usuario, correo, contrasena);
  //   form.reset(); // Limpiar el formulario después de registrar el usuario
  //   this.registroExitoso = true; // Marcar el registro como exitoso
  //   setTimeout(() => {
  //     this.registroExitoso = false; // Ocultar la alerta después de unos segundos
  //   }, 3000); // Ocultar después de 3 segundos
  // }
}
