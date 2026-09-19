import { faker } from '@faker-js/faker';
import { Course, CourseArea } from '../../../domain/interfaces/course.interface';
import { CustomError } from '../../../domain/erros/custom.error';

export class CoursesService {
  private readonly areas: CourseArea[] = [
    'Ingeniería de software',
    'Bases de datos',
    'Redes',
    'Matemáticas',
    'Humanidades',
  ];

  public async getAllCourses(): Promise<Course[]> {
    return Array.from({ length: 10 }, (_, index) => this.generateCourse(index + 1));
  }

  public async getCourseById(id: number): Promise<Course> {
    this.validateId(id);

    return this.generateCourse(id);
  }

  private generateCourse(id: number): Course {
    return {
      id,
      name: faker.helpers.arrayElement([
        'Arquitectura de Software',
        'Programación Web',
        'Sistemas Operativos',
        'Bases de Datos',
        'Redes de Computadores',
      ]),
      code: `ASI-${faker.number.int({ min: 100, max: 499 })}`,
      credits: faker.number.int({ min: 2, max: 4 }),
      semester: faker.number.int({ min: 1, max: 10 }),
      area: faker.helpers.arrayElement(this.areas),
    };
  }

  private validateId(id: number): void {
    if (!Number.isInteger(id) || id < 1) {
      throw CustomError.badRequest('El id del curso debe ser un entero positivo');
    }
  }
}
