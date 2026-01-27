import { Routes } from '@angular/router';

import { LayoutPublic } from './core/layout-public/layout-public';
import { LayoutPrivate } from './core/layout-private/layout-private';

import { Home } from './pages/home/home';
import { InicioSesion } from './features/formularios/inicio-sesion/inicio-sesion';
import { Registro } from './features/formularios/registro/registro';

import { Dashboard } from './pages/dashboard/dashboard';
import { TurneroClientes } from './pages/turnero-clientes/turnero-clientes';
import { TurneroServicios } from './pages/turnero-servicios/turnero-servicios';

export const routes: Routes = [

  /* =========================
     RUTAS PÚBLICAS
  ========================== */
  {
    path: '',
    component: LayoutPublic,
    children: [
      { path: '', component: Home },
      { path: 'inicio-sesion', component: InicioSesion },
      { path: 'registrarse', component: Registro }
    ]
  },

  /* =========================
     RUTAS PRIVADAS
  ========================== */
  {
    path: 'dashboard',
    component: LayoutPrivate,
    children: [
      { path: '', component: Dashboard },
      { path: 'turnos', component: TurneroClientes },
      { path: 'turnero-servicios', component: TurneroServicios }
    ]
  },

  /* =========================
     WILDCARD
  ========================== */
  { path: '**', redirectTo: '' }
];
