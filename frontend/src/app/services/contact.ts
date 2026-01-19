import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contacto {
  id?: number;
  nombre: string;
  apellido: string;
  cedula: string;
  correo: string;
  celular: string;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Llamada a Backend
  private http = inject(HttpClient);

  // Dirección del Backend
  private apiUrl = 'http://localhost:5147/contacts';

  constructor() { }

  // GET
  getContacts(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.apiUrl);
  }

  // GET id
  getContact(id: number): Observable<Contacto> {
    return this.http.get<Contacto>(`${this.apiUrl}/${id}`);
  }

  // GET con parametro nombre
  searchContacts(nombre: string): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.apiUrl}/search?name=${nombre}`);
  }

  // POST
  addContact(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.apiUrl, contacto);
  }

  // DELETE
  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // PUT
  updateContact(id: number, contacto: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(`${this.apiUrl}/${id}`, contacto);
  }
}