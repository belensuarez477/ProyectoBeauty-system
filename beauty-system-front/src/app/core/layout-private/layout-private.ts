import { Component } from '@angular/core';
import { Dashboard } from "../../pages/dashboard/dashboard";
import { NavbarPrivate } from "../../components/navbar-private/navbar-private";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout-private',
  imports: [Dashboard, NavbarPrivate, RouterOutlet],
  templateUrl: './layout-private.html',
  styleUrl: './layout-private.css',
})
export class LayoutPrivate {

}
