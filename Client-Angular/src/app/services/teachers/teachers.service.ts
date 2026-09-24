import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../interfaces/teacher.interface';

/** Consulta los docentes disponibles. */
@Injectable({ providedIn: 'root' })
export class TeachersService {
  private readonly httpClient = inject(HttpClient);

  getAllTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>('api/teachers');
  }

  getTeacherById(id: number): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`api/teachers/${id}`);
  }
}
