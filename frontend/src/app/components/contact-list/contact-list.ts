import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ContactService, Contacto } from '../../services/contact';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css']
})
export class ContactList implements OnInit {
  // Inyeccion servicio
  private contactService = inject(ContactService);

  // Inyeccion detector de cambios
  private cd = inject(ChangeDetectorRef);
  
  // Lista del backend
  contactos: Contacto[] = [];

  // Cargar al iniciar el componente
  ngOnInit() {
    this.cargarContactos();
  }

  cargarContactos() {
    this.contactService.getContacts().subscribe((data) => {
      this.contactos = data;
      this.cd.detectChanges();
    });
  }

  // Boton de eliminar
  eliminar(id?: number) {
    if (!id) return;

    if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      this.contactService.deleteContact(id).subscribe(() => {
        // Recargar la lista
        this.cargarContactos();
      });
    }
  }

  // Funcion para el buscador
  buscar(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value;

    if (valor) {
      // Buscar en el backend
      this.contactService.searchContacts(valor).subscribe((data) => {
        this.contactos = data;
        this.cd.detectChanges();
      });
    } else {
      this.cargarContactos();
    }
  }
}