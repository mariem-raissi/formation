import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dentistes } from './dentistes/dentistes';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Dentistes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sourire-sante');
}
