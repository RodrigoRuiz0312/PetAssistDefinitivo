import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [ReactiveFormsModule]
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registroForm = this.fb.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      tipo: ['cliente'] // Por defecto a cliente
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.http.post('http://localhost:3000/api/registro', this.registroForm.value)
        .subscribe(response => {
          console.log('Registro exitoso:', response);
          this.registroForm.reset();
          // Redirige a la página deseada
        }, error => {
          console.error('Error en el registro:', error);
        });
    }
  }
}