import { faker } from '@faker-js/faker';
import { CustomError } from '../../../domain/erros/custom.error';
import { Teacher } from '../../../domain/interfaces/teacher.interface';

export class TeachersService {
  public async getAllTeachers(): Promise<Teacher[]> {
    return Array.from({ length: 10 }, (_, index) => this.generateTeacher(index + 1));
  }

  public async getTeacherById(id: number): Promise<Teacher> {
    this.validateId(id);

    return this.generateTeacher(id);
  }

  private generateTeacher(id: number): Teacher {
    return {
      id,
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email({ provider: 'uceva.edu.co' }),
      department: 'Ingeniería de Sistemas',
      specialty: faker.helpers.arrayElement([
        'Desarrollo web',
        'Bases de datos',
        'Arquitectura de software',
        'Redes de computadores',
      ]),
    };
  }

  private validateId(id: number): void {
    if (!Number.isInteger(id) || id < 1) {
      throw CustomError.badRequest('El id del docente debe ser un entero positivo');
    }
  }
}
