import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {
  nombre = '';
  email = '';
  telefono = '';
  mensaje = '';

  toastVisible = false;
  toastMessage = '';
  toastTipo: 'exito' | 'error' = 'exito';

  enviarContacto() {
    // Validar que todos los campos estén completos
    if (!this.nombre || !this.email || !this.telefono || !this.mensaje) {
      this.mostrarToast('Complete todos los campos', 'error');
      return;
    }

    // Validar que el email sea válido
    if (!this.validarEmail(this.email)) {
      this.mostrarToast('Ingresa un email válido', 'error');
      return;
    }

    // Validar que el teléfono sea solo números
    if (!/^\d+$/.test(this.telefono)) {
      this.mostrarToast('El teléfono debe contener solo números', 'error');
      return;
    }

    // Si todo es válido, guardar el mensaje
    this.mostrarToast('Mensaje enviado correctamente', 'exito');
    this.limpiarFormulario();
  }

  private validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  private mostrarToast(mensaje: string, tipo: 'exito' | 'error') {
    this.toastMessage = mensaje;
    this.toastTipo = tipo;
    this.toastVisible = true;

    // Ocultar el toast después de 4 segundos
    setTimeout(() => {
      this.toastVisible = false;
    }, 4000);
  }

  private limpiarFormulario() {
    this.nombre = '';
    this.email = '';
    this.telefono = '';
    this.mensaje = '';
  }
}
