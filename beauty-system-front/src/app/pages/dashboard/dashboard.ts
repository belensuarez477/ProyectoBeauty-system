import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { QuickAction } from './quick-action/quick-action';
import { Modales } from '../../features/modales/modales';
import { NavbarPrivate } from '../../components/navbar-private/navbar-private';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    QuickAction,
    Modales,
    NavbarPrivate
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit, OnDestroy {

  mostrarModal = false;
  fechaActual = new Date();
  intervalo!: number;

  turnosHoy = [
    { hora: '09:00', cliente: 'Ana Pérez' },
    { hora: '10:00', cliente: 'Lucía Gómez' },
    { hora: '11:00', cliente: 'Disponible' }
  ];

  serviciosHoy = [
    { nombre: 'Limpieza facial', disponibles: 2 },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.intervalo = window.setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  abrirCalendario() {
    this.mostrarModal = true;
  }

  cerrarCalendario() {
    this.mostrarModal = false;
  }

  nuevoServicio() {
    this.router.navigate(['/dashboard/servicios']);
  }

  irAGestionTurno(fecha: string) {
    this.mostrarModal = false;

    this.router.navigate(
      ['/dashboard/turnos'],
      { queryParams: { fecha } }
    );
  }
}
