import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/docentes';

  constructor(private httpClient: HttpClient) {}

  // Obtener todos los docentes
  getDocentes(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  // Obtener un docente por RFC
  getDocenteByRFC(RFC: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${RFC}`);
  }

  // Crear un nuevo docente
  createDocente(docente: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, docente);
  }

  // Actualizar un docente
  updateDocente(RFC: string, docente: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${RFC}`, docente);
  }

  // Eliminar un docente
  deleteDocente(RFC: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${RFC}`);
  }
}