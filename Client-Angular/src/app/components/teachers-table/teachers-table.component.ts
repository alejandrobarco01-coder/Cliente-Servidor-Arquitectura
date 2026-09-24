import { Component, Input } from '@angular/core';
import { Teacher } from '../../interfaces/teacher.interface';

/** Tabla reutilizable para el listado de docentes. */
@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
})
export class TeachersTableComponent {
  @Input() teachers: Teacher[] = [];
}
