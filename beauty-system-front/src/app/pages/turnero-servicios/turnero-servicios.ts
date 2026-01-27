import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Service {
  id: number;
  name: string;
  duration: number;
  machine?: string;
  status: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-turnero-servicios',
  templateUrl: './turnero-servicios.html',
  styleUrls: ['./turnero-servicios.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class TurneroServicios {

  services: Service[] = [];
  showForm = false;

  machines = [
    'Láser Pro X',
    'HydraSkin',
    'RF Facial 2000'
  ];

  newService: Service = this.createEmptyService();

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addService() {
    const service: Service = {
      ...this.newService,
      id: Date.now()
    };

    this.services.push(service);
    this.newService = this.createEmptyService();
    this.showForm = false;
  }

  deleteService(id: number) {
    this.services = this.services.filter(s => s.id !== id);
  }

  private createEmptyService(): Service {
    return {
      id: 0,
      name: '',
      duration: 1,
      machine: '',
      status: 'Pendiente',
      startDate: '',
      endDate: ''
    };
  }
}
