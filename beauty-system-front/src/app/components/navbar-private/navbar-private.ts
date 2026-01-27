import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar-privado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-private.html',
  styleUrl: './navbar-private.css'
})
export class NavbarPrivate {

  menuAbierto = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarSesion() {
    this.menuAbierto = false;
    this.authService.cerrarSesion();
    this.router.navigate(['/inicio-sesion']);
  }
}
