import { faker } from '@faker-js/faker';
import { AcademicEvent, AcademicEventType } from '../../../domain/interfaces/academic-event.interface';
import { CustomError } from '../../../domain/erros/custom.error';

export class EventsService {
  private readonly eventTypes: AcademicEventType[] = [
    'Seminario',
    'Conferencia',
    'Taller',
    'Feria académica',
  ];

  public async getAllEvents(): Promise<AcademicEvent[]> {
    return Array.from({ length: 10 }, (_, index) => this.generateEvent(index + 1));
  }

  public async getEventById(id: number): Promise<AcademicEvent> {
    this.validateId(id);

    return this.generateEvent(id);
  }

  private generateEvent(id: number): AcademicEvent {
    return {
      id,
      title: faker.helpers.arrayElement([
        'Seminario de innovación tecnológica',
        'Conferencia de transformación digital',
        'Taller de desarrollo de software',
        'Feria académica UCEVA',
      ]),
      date: faker.date.future({ years: 1 }).toISOString().slice(0, 10),
      location: faker.helpers.arrayElement(['Auditorio UCEVA', 'Sala de sistemas', 'Biblioteca', 'Campus universitario']),
      type: faker.helpers.arrayElement(this.eventTypes),
      capacity: faker.number.int({ min: 30, max: 250 }),
    };
  }

  private validateId(id: number): void {
    if (!Number.isInteger(id) || id < 1) {
      throw CustomError.badRequest('El id del evento debe ser un entero positivo');
    }
  }
}
