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


}
