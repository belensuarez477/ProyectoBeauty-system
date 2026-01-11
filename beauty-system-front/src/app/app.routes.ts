import { Routes } from '@angular/router';
import { LayoutPublic } from './core/layout-public/layout-public';
import { Home } from './pages/home/home';
import { InicioSesion } from './feauters/formularios/inicio-sesion/inicio-sesion';
import { Registro } from './feauters/formularios/registro/registro';
import { Contactos } from './feauters/formularios/contactos/contactos';
import { LayoutPrivate } from './core/layout-private/layout-private';
import { Dashboard } from './pages/dashboard/dashboard';
import { TurneroClientes } from './pages/turnero-clientes/turnero-clientes';
import { TurneroServicios } from './pages/turnero-servicios/turnero-servicios';

export const routes: Routes = [

    
  // Públicas
  {
    path: '',
    component: LayoutPublic,
    children: [
      { path: '', component: Home },
      { path: 'inicio-sesion', component: InicioSesion },
      { path: 'registrarse', component: Registro },
      { path: 'contactanos', component: Contactos}
    ]
  },

  // Privadas
  {
    path: 'perfil-usuario',
    component: LayoutPrivate,
    children: [
      { path: 'dashboard', component: Dashboard },

      { path: 'turnos/crearTurno', component: TurneroClientes },
      { path: 'servicio', component: TurneroServicios },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
