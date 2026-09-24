import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { EventsService } from '../../services/events/events.service';
import { EventsPage } from './events.page';

describe('EventsPage', () => {
  let component: EventsPage;
  let fixture: ComponentFixture<EventsPage>;
  let service: EventsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [EventsPage], providers: [provideHttpClient()] }).compileComponents();
    fixture = TestBed.createComponent(EventsPage);
    component = fixture.componentInstance;
    service = TestBed.inject(EventsService);
  });

  it('muestra los eventos al completar la consulta', () => {
    const events = [{ id: 1, title: 'Seminario', date: '2026-10-15', location: 'UCEVA', type: 'Seminario', capacity: 120 }];
    jest.spyOn(service, 'getAllEvents').mockReturnValue(of(events));
    fixture.detectChanges();
    expect(component.state).toBe('success');
    expect(component.events).toEqual(events);
  });

  it('muestra estado de error si falla la consulta', () => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    jest.spyOn(service, 'getAllEvents').mockReturnValue(throwError(() => new Error('falló')));
    fixture.detectChanges();
    expect(component.state).toBe('error');
  });
});
