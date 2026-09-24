import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  const course: Course = { id: 1, name: 'Arquitectura de Software', code: 'ASI-401', credits: 3, semester: 7, area: 'Ingeniería de software' };
  let service: CoursesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(CoursesService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => httpMock.verify());

  it('consulta el listado y el detalle de cursos', () => {
    service.getAllCourses().subscribe((courses) => expect(courses).toEqual([course]));
    httpMock.expectOne('api/courses').flush([course]);
    service.getCourseById(1).subscribe((result) => expect(result).toEqual(course));
    httpMock.expectOne('api/courses/1').flush(course);
  });
});
