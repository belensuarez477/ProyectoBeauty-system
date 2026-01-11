import { Component } from '@angular/core';
import { Home } from "../../pages/home/home";
import { Hero } from "../../components/hero/hero";
import { NavbarPublic } from "../../components/navbar-public/navbar-public";
import { ComoFunciona } from "../../feauters/como-funciona/como-funciona";
import { Beneficios } from "../../feauters/beneficios/beneficios";

@Component({
  selector: 'app-layout-public',
  imports: [Home, Hero, NavbarPublic, ComoFunciona, Beneficios],
  templateUrl: './layout-public.html',
  styleUrl: './layout-public.css',
})
export class LayoutPublic {

}
