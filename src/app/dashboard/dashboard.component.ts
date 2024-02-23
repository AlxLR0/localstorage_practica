import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nombreUsuario: string | undefined;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    const correoUsuario = localStorage.getItem('correoUsuario');
    console.log('Correo del usuario:', correoUsuario); // Agregar esta línea
    if (correoUsuario) {
      this.nombreUsuario = this.usuariosService.obtenerNombreUsuario(correoUsuario);
    }
  }
}
