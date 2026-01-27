import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-summary',
  imports: [CommonModule],
  templateUrl: './services-summary.html',
  styleUrl: './services-summary.css',
})
export class ServicesSummary {

  serviciosHoy = ['Depilación']; // ❗ no se toca
  servicesActivos = ['Depilación', 'Limpieza facial', 'Masajes'];

  // Turnos disponibles por servicio
  turnosDisponibles: Record<string, number> = {
    'Depilación': 3,
    'Limpieza facial': 5,
    'Masajes': 2
  };
}
