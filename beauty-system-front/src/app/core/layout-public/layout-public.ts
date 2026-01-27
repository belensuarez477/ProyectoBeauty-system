import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarPublic } from '../../components/navbar-public/navbar-public';

@Component({
  selector: 'app-layout-public',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarPublic // 🔥 ahora sí
  ],
  templateUrl: './layout-public.html',
})
export class LayoutPublic {}
