import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course.interface';

/** Consulta los cursos académicos disponibles. */
@Injectable({ providedIn: 'root' })
export class CoursesService {
  private readonly httpClient = inject(HttpClient);

  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('api/courses');
  }

  getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`api/courses/${id}`);
  }
}
