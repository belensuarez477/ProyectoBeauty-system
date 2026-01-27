import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-action.html',
  styleUrl: './quick-action.css',
})
export class QuickAction {

  @Output() nuevoTurno = new EventEmitter<void>();
  @Output() nuevoServicio = new EventEmitter<void>();

  onNuevoTurno() {
    this.nuevoTurno.emit();
  }

  onNuevoServicio() {
    this.nuevoServicio.emit();
  }
}
