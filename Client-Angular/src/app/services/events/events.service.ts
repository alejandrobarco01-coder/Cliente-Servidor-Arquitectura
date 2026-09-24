import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcademicEvent } from '../../interfaces/academic-event.interface';

/** Consulta los eventos académicos disponibles. */
@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly httpClient = inject(HttpClient);

  getAllEvents(): Observable<AcademicEvent[]> {
    return this.httpClient.get<AcademicEvent[]>('api/events');
  }

  getEventById(id: number): Observable<AcademicEvent> {
    return this.httpClient.get<AcademicEvent>(`api/events/${id}`);
  }
}
