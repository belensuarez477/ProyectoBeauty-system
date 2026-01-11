import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Beneficios } from "../../feauters/beneficios/beneficios";
import { ComoFunciona } from "../../feauters/como-funciona/como-funciona";
import { InicioSesion } from '../../feauters/formularios/inicio-sesion/inicio-sesion';
import { Registro } from '../../feauters/formularios/registro/registro';
import { Contactos } from '../../feauters/formularios/contactos/contactos';
import { NavbarPublic } from '../../components/navbar-public/navbar-public';

@Component({
  selector: 'app-home',
  imports: [Hero, Beneficios, ComoFunciona, InicioSesion, Registro, Contactos, NavbarPublic],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
