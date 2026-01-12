import { Routes } from '@angular/router';

import { LayoutPublic } from './core/layout-public/layout-public';
import { Home } from './pages/home/home';
import { InicioSesion } from './features/formularios/inicio-sesion/inicio-sesion';
import { Registro } from './features/formularios/registro/registro';
import { Contactos } from './features/formularios/contactos/contactos';

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
  }
];

