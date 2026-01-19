import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactList } from './components/contact-list/contact-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
