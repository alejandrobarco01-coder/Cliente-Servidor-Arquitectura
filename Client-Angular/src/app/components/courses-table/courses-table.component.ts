import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

/** Tabla reutilizable para el listado de cursos. */
@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
})
export class CoursesTableComponent {
  @Input() courses: Course[] = [];
}
