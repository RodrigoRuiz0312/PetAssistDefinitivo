import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-usuarios',
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  docentes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadDocentes();
  }

  // Método para cargar todos los docentes
  loadDocentes(): void {
    this.apiService.getDocentes().subscribe((data) => {
      this.docentes = data;
    });
  }

  // Método para agregar un docente
  addDocente(docente: any): void {
    this.apiService.createDocente(docente).subscribe(() => {
      this.loadDocentes(); // Recargar la lista después de agregar
    });
  }

  // Método para actualizar un docente
  updateDocente(RFC: string, docente: any): void {
    this.apiService.updateDocente(RFC, docente).subscribe(() => {
      this.loadDocentes(); // Recargar la lista después de actualizar
    });
  }

  // Método para eliminar un docente
  deleteDocente(RFC: string): void {
    this.apiService.deleteDocente(RFC).subscribe(() => {
      this.loadDocentes(); // Recargar la lista después de eliminar
    });
  }
}
