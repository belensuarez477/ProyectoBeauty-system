import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarPrivate } from '../../components/navbar-private/navbar-private';

@Component({
  selector: 'app-turnero-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarPrivate],
  templateUrl: './turnero-clientes.html',
  styleUrl: './turnero-clientes.css',
})
export class TurneroClientes implements OnInit {

  mostrarCalendario = false;
  fechaSeleccionada: Date | null = null;
  mensajeConfirmacion: string | null = null;
  mensajeGuardado: string | null = null;

  // Opciones de servicios y estados
  servicios: string[] = [
    'Limpieza Facial',
    'Manicura',
    'Pedicura',
    'Masaje',
    'Depilación'
  ];

  estados: string[] = ['Presente', 'Ausente', 'Cancelado'];

  // Inicialmente sin datos
  turnos: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const fechaParam = params['fecha'];

      if (fechaParam) {
        const [year, month, day] = fechaParam.split('-').map(Number);
        this.fechaSeleccionada = new Date(year, month - 1, day);
      } else {
        this.fechaSeleccionada = null;
      }
    });
  }

  agregarTurno(): void {
    this.turnos.push({
      hora: '',
      nombre: '',
      apellido: '',
      servicio: this.servicios[0],
      precio: '',
      promocion: '',
      estado: this.estados[0]
    });
  }

  editarTurno(): void {
    console.log('Editar información de turno');
    // Aquí podrías abrir un modal o redirigir a otra ruta
  }

  guardarTurno(): void {
    this.mensajeGuardado = "✅ Turno guardado con éxito";

    // Ocultar el aviso después de 3 segundos
    setTimeout(() => {
      this.mensajeGuardado = null;
    }, 3000);
  }
}
