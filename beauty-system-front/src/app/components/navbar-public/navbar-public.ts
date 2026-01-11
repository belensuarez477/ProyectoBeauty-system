import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-public',
  imports: [RouterLink],
  templateUrl: './navbar-public.html',
  styleUrl: './navbar-public.css',
})
export class NavbarPublic {
sMenuOpen = false;
  isMenuOpen: any;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
