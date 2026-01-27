import { Routes } from '@angular/router';
import { LayoutPublic } from './app/core/layout-public/layout-public';
import { Home } from './app/pages/home/home';
import { InicioSesion } from './app/features/formularios/inicio-sesion/inicio-sesion';
import { Registro } from './app/features/formularios/registro/registro';
import { Contactos } from './app/features/formularios/contactos/contactos';
import { Dashboard } from './app/pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPublic,
    children: [
      { path: '', component: Home },
      { path: 'inicio-sesion', component: InicioSesion },
      { path: 'registrarse', component: Registro },
      { path: 'contactanos', component: Contactos }
    ]
  },

  // 🔥 DASHBOARD FUERA DEL LAYOUT PÚBLICO
  {
    path: 'dashboard',
    component: Dashboard
  },

  // fallback
  {
    path: '**',
    redirectTo: ''
  }
];
