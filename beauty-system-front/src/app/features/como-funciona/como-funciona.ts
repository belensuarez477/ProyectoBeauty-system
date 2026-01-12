import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-como-funciona',
  imports: [RouterOutlet],
  templateUrl: './como-funciona.html',
  styleUrl: './como-funciona.css',
})
export class ComoFunciona {
 steps = [
    { title: '1. Registro Rápido', text: 'Crea tu cuenta en minutos y comienza a gestionar tu negocio inmediatamente' },
    { title: '2. Gestión de Turnos', text: 'Organiza y administra las citas de tus clientes de manera eficiente y sin complicaciones' },
    { title: '3. Servicio Mejorado', text: 'Ofrece una experiencia excepcional con seguimiento personalizado para cada cliente' }
  ];
}
