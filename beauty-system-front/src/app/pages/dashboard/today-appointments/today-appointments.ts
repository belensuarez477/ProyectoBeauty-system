import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-today-appointments',
  imports: [CommonModule],
  templateUrl: './today-appointments.html',
  styleUrl: './today-appointments.css',
})
export class TodayAppointments {

  appointments = [ 
  { time: '10:00', client: 'Ana', service: 'Depilación', status: 'Confirmado' }, 
  { time: '11:00', client: 'Luis', service: 'Depilación', status: 'Pendiente' }, 
  { time: '12:00', client: 'María', service: 'Depilación', status: 'Confirmado' },
 { time: '12:00', client: 'Rosa', service: 'Depilación', status: 'Cancelado' } ]; diaHoy = new Date().toLocaleDateString('es-AR', { weekday: 'long' }); // 🔹 Servicio del día: se toma del primer turno get servicioDelDia(): string { return this.appointments.length > 0 ? this.appointments[0].service : 'Sin servicio'; }
serviciosHoy: any;

}
