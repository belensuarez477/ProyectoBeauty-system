import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutPublic } from "./core/layout-public/layout-public";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('beauty-system-front');
}
