import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  registrarUsuario(usuario: string, correo: string, contrasena: string): void {
    try {
        // Obtener los usuarios almacenados en localStorage o inicializar como un arreglo vacío si no hay usuarios
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

        // Crear un nuevo objeto de usuario
        const nuevoUsuario = { usuario, correo, contrasena };

        // Agregar el nuevo usuario al arreglo de usuarios
        usuarios.push(nuevoUsuario);

        // Actualizar los usuarios en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        // Verificar que se ha registrado correctamente imprimiendo los usuarios en la consola
        console.log('Usuarios registrados:', usuarios);
        
    } catch (error) {
        console.log(error);
    }
}


  // Método para verificar las credenciales de inicio de sesión
  iniciarSesion(correo: string, contrasena: string): boolean {
    try {
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const usuarioEncontrado = usuarios.find((usuario: any) => usuario.correo === correo && usuario.contrasena === contrasena);
      return usuarioEncontrado ? true : false;
      
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  usuarioExiste(correo: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios.some((usuario: any) => usuario.correo === correo);
  }


}
