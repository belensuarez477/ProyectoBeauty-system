import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Home } from '../../pages/home/home';
import { Hero } from '../../components/hero/hero';
import { NavbarPublic } from '../../components/navbar-public/navbar-public';
import { ComoFunciona } from '../../features/como-funciona/como-funciona';
import { Beneficios } from '../../features/beneficios/beneficios';

@Component({
  selector: 'app-layout-public',
  standalone: true,
  imports: [
    RouterOutlet,
    Home,
    Hero,
    NavbarPublic,
    ComoFunciona,
    Beneficios
  ],
  templateUrl: './layout-public.html'
})
export class LayoutPublic {}
