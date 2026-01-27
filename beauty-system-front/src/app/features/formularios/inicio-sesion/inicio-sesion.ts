import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css',
})
export class InicioSesion implements OnInit {
  usuario = '';
  password = '';

  toastVisible = false;
  toastMessage = '';
  toastTipo: 'exito' | 'error' = 'exito';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usuario = '';
    this.password = '';
  }

  iniciarSesion(form: NgForm) {
    if (form.invalid) {
      this.mostrarToast('Completa todos los campos', 'error');
      return;
    }

    const resultado = this.authService.validarSesion(
      this.usuario,
      this.password
    );

    if (resultado.success) {
      this.authService.guardarSesionActual(this.usuario);
      this.mostrarToast('Inicio de sesión exitoso', 'exito');

      setTimeout(() => {
        this.router.navigate(['/dashboard'], { replaceUrl: true });
      }, 1500);

    } else {
      this.mostrarToast(resultado.mensaje, 'error');
    }

    form.resetForm();
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
