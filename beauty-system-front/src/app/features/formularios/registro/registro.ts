import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  nombre = '';
  email = '';
  usuario = '';
  password = '';
  confirmar = '';

  toastVisible = false;
  toastMessage = '';
  toastTipo: 'exito' | 'error' = 'exito';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  registrar() {
    if (!this.nombre || !this.email || !this.usuario || !this.password || !this.confirmar) {
      this.mostrarToast('Complete los datos faltantes', 'error');
      return;
    }

    if (this.password !== this.confirmar) {
      this.mostrarToast('Las contraseñas no coinciden', 'error');
      return;
    }

    const resultado = this.authService.registrarUsuario({
      nombre: this.nombre,
      email: this.email,
      usuario: this.usuario,
      password: this.password
    });

    if (resultado.success) {
      // 👉 LOGIN AUTOMÁTICO
      this.authService.guardarSesionActual(this.usuario);

      this.mostrarToast('Registro exitoso', 'exito');

      setTimeout(() => {
        this.router.navigate(['/dashboard'], { replaceUrl: true });
      }, 1500);

    } else {
      this.mostrarToast(resultado.mensaje, 'error');
    }
  }

  private mostrarToast(mensaje: string, tipo: 'exito' | 'error') {
    this.toastMessage = mensaje;
    this.toastTipo = tipo;
    this.toastVisible = true;

    setTimeout(() => {
      this.toastVisible = false;
    }, 4000);
  }
}
