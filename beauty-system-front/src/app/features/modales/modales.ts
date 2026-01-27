import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modales.html',
  styleUrl: './modales.css',
})
export class Modales {

  @Output() confirmarFecha = new EventEmitter<string>();
  @Output() cerrarModal = new EventEmitter<void>();

  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();

  fechaSeleccionada: string | null = null;

  months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  get daysInMonth(): number[] {
    const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }

get firstDayOfMonth(): number {
  const day = new Date(this.currentYear, this.currentMonth, 1).getDay();
  return day === 0 ? 6 : day - 1;
}


  // ✅ Única implementación correcta
selectDate(day: number): void {
  // Creamos la fecha en hora local (no UTC)
  const seleccionada = new Date(this.currentYear, this.currentMonth, day);

  // Guardamos en formato YYYY-MM-DD
  const year = seleccionada.getFullYear();
  const month = String(seleccionada.getMonth() + 1).padStart(2, '0');
  const dayStr = String(seleccionada.getDate()).padStart(2, '0');

  this.fechaSeleccionada = `${year}-${month}-${dayStr}`;
}

isSelected(day: number): boolean {
  const month = String(this.currentMonth + 1).padStart(2, '0');
  const dayStr = String(day).padStart(2, '0');
  const fecha = `${this.currentYear}-${month}-${dayStr}`;

  return this.fechaSeleccionada === fecha;
}

  previousMonth(): void {
    this.currentMonth === 0
      ? (this.currentMonth = 11, this.currentYear--)
      : this.currentMonth--;
  }

  nextMonth(): void {
    this.currentMonth === 11
      ? (this.currentMonth = 0, this.currentYear++)
      : this.currentMonth++;
  }

  confirmar(): void {
    if (!this.fechaSeleccionada) return;

    const hoy = new Date();
    const seleccionada = new Date(this.fechaSeleccionada);

    hoy.setHours(0,0,0,0);
    seleccionada.setHours(0,0,0,0);

    if (seleccionada < hoy) {
      alert('No puedes agendar turnos en fechas pasadas.');
      return;
    }

    this.confirmarFecha.emit(this.fechaSeleccionada);
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }
}
