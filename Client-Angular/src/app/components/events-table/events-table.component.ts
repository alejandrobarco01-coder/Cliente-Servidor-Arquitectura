import { Component, Input } from '@angular/core';
import { AcademicEvent } from '../../interfaces/academic-event.interface';

/** Tabla reutilizable para el listado de eventos académicos. */
@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
})
export class EventsTableComponent {
  @Input() events: AcademicEvent[] = [];
}
