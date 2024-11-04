import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/api/login', this.loginForm.value)
        .subscribe(response => {
          console.log('Login exitoso:', response);
          this.loginForm.reset();          
          this.router.navigate(['/about']); // Cambia '/pagina-deseada' por la ruta a la que quieres redirigir
          // Aquí puedes redirigir o guardar el token de sesión
        }, error => {
          console.error('Error en el login:', error);
        });
    }
  }
}
