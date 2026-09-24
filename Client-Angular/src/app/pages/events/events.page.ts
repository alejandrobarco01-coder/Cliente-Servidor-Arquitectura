import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { EventsTableComponent } from '../../components/events-table/events-table.component';
import { AcademicEvent } from '../../interfaces/academic-event.interface';
import { State } from '../../interfaces/state.interface';
import { EventsService } from '../../services/events/events.service';

/** Carga y presenta los eventos académicos. */
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  imports: [AlertComponent, EventsTableComponent],
})
export class EventsPage {
  events: AcademicEvent[] = [];
  state: State = 'init';
  private readonly eventsService = inject(EventsService);

  ngOnInit(): void {
    this.state = 'loading';
    this.eventsService.getAllEvents().subscribe({
      next: (events) => { this.events = events; this.state = 'success'; },
      error: (error) => { console.error(error); this.state = 'error'; },
    });
  }
}
