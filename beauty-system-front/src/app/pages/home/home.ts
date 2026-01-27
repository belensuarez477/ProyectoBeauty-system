import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { NavbarPublic } from '../../components/navbar-public/navbar-public';
import { Beneficios } from '../../features/beneficios/beneficios';
import { ComoFunciona } from '../../features/como-funciona/como-funciona';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Beneficios,
    ComoFunciona,
  ],
  templateUrl: './home.html'
})
export class Home {}
