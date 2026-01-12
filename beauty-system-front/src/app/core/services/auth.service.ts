import { Injectable } from '@angular/core';

export interface Usuario {
  nombre: string;
  email: string;
  usuario: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios: Usuario[] = [];

  constructor() {
    this.cargarUsuarios();
  }

  private cargarUsuarios() {
    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
      this.usuarios = JSON.parse(usuariosGuardados);
    }
  }

  private guardarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  // Validar email
  validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Validar contraseña (máx 12 caracteres, mezcla de letras, números y caracteres especiales)
  validarPassword(password: string): boolean {
    if (password.length > 12) return false;
    
    const tieneLetra = /[a-zA-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    return tieneLetra && tieneNumero && tieneEspecial;
  }

  // Validar nombre completo (mínimo 2 palabras)
  validarNombreCompleto(nombre: string): boolean {
    const palabras = nombre.trim().split(/\s+/);
    return palabras.length >= 2 && nombre.trim().length > 0;
  }

  // Registrar nuevo usuario
  registrarUsuario(usuario: Usuario): { success: boolean; mensaje: string } {
    // Validar nombre completo
    if (!this.validarNombreCompleto(usuario.nombre)) {
      return { success: false, mensaje: 'El nombre debe contener al menos nombre y apellido' };
    }

    // Validar email
    if (!this.validarEmail(usuario.email)) {
      return { success: false, mensaje: 'El email debe tener un dominio válido' };
    }

    // Validar contraseña
    if (!this.validarPassword(usuario.password)) {
      return { success: false, mensaje: 'La contraseña debe tener máximo 6 caracteres y contener letras, números y caracteres especiales' };
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = this.usuarios.find(u => u.email === usuario.email || u.usuario === usuario.usuario);
    if (usuarioExistente) {
      return { success: false, mensaje: 'El email o usuario ya están registrados' };
    }

    // Guardar usuario
    this.usuarios.push(usuario);
    this.guardarUsuarios();
    return { success: true, mensaje: 'Registro exitoso' };
  }

  // Validar inicio de sesión
  validarSesion(usuario: string, password: string): { success: boolean; mensaje: string } {
    const usuarioEncontrado = this.usuarios.find(u => u.usuario === usuario);
    
    if (!usuarioEncontrado) {
      return { success: false, mensaje: 'Error: debe registrarse antes de iniciar sesión!' };
    }

    if (usuarioEncontrado.password !== password) {
      return { success: false, mensaje: 'Contraseña incorrecta' };
    }

    return { success: true, mensaje: 'Inicio de sesión exitoso' };
  }

  // Guardar usuario en sesión
  guardarSesionActual(usuario: string) {
    localStorage.setItem('usuarioActual', usuario);
  }

  // Obtener usuario actual
  obtenerUsuarioActual(): string | null {
    return localStorage.getItem('usuarioActual');
  }

  // Cerrar sesión
  cerrarSesion() {
    localStorage.removeItem('usuarioActual');
  }
}
