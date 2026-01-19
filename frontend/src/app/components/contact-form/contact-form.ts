import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  // Módulo de formularios reactivos
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactForm {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private router = inject(Router);
  private activeRouter = inject(ActivatedRoute);
  idContacto = 0;

  // Cargar al iniciar el componente
  ngOnInit() {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      const idNum = Number(id)
      this.idContacto = idNum;
      this.cargarContacto(idNum);
    }
  }

  cargarContacto(id: number) {
    this.contactService.getContact(id).subscribe({
      next: (data) => {
        this.form.patchValue(data);
      },
      error: (err) => {
        console.error('El contacto no existe:', err);
        alert('El contacto no existe.');
        this.router.navigate(['/']);
      }
    });
  }

  // Reglas de Formulario
  form: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$'), Validators.maxLength(50)]],
    apellido: ['', [Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$'), Validators.maxLength(50)]],
    cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.maxLength(10)]],
    correo: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    celular: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.maxLength(10)]],
    direccion: ['', Validators.maxLength(200)]
  });

  // Enviar los datos
  guardar() {
    if (this.form.invalid) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }

    const contacto = this.form.value;

    if (this.idContacto == 0) {
      this.contactService.addContact(contacto).subscribe({
        next: () => {
          alert('¡Contacto guardado con éxito!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          alert('Hubo un error al intentar guardar.');
        }
      });
    } else {
      this.contactService.updateContact(this.idContacto, contacto).subscribe({
        next: () => {
          alert('¡Contacto actualizado con éxito!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error al actualizar:', err);
          alert('Hubo un error al intentar actualizar.');
        }
      });
    }

  }
}