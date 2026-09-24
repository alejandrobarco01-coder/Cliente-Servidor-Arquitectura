import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AcademicEvent } from '../../interfaces/academic-event.interface';
import { EventsService } from './events.service';

describe('EventsService', () => {
  const event: AcademicEvent = { id: 1, title: 'Seminario de innovación tecnológica', date: '2026-10-15', location: 'Auditorio UCEVA', type: 'Seminario', capacity: 120 };
  let service: EventsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(EventsService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => httpMock.verify());

  it('consulta el listado y el detalle de eventos', () => {
    service.getAllEvents().subscribe((events) => expect(events).toEqual([event]));
    httpMock.expectOne('api/events').flush([event]);
    service.getEventById(1).subscribe((result) => expect(result).toEqual(event));
    httpMock.expectOne('api/events/1').flush(event);
  });
});
