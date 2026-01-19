import { Routes } from '@angular/router';
import { ContactList } from './components/contact-list/contact-list';
import { ContactForm } from './components/contact-form/contact-form';

export const routes: Routes = [
  // Ruta por defecto (Home) -> Lista de contactos
  { path: '', component: ContactList },
  
  // Ruta para crear el formulario
  { path: 'new', component: ContactForm },

  // Ruta para editar el formulario
  { path: 'edit/:id', component: ContactForm },
  
  // Volver al inicio con culaquie ruta
  { path: '**', redirectTo: '' }
];