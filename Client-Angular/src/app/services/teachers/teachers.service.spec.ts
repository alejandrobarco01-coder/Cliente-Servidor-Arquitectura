import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Teacher } from '../../interfaces/teacher.interface';
import { TeachersService } from './teachers.service';

describe('TeachersService', () => {
  const teacher: Teacher = { id: 1, name: 'Laura', lastName: 'Gómez', email: 'laura.gomez@uceva.edu.co', department: 'Ingeniería de Sistemas', specialty: 'Desarrollo web' };
  let service: TeachersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(TeachersService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => httpMock.verify());

  it('consulta el listado y el detalle de docentes', () => {
    service.getAllTeachers().subscribe((teachers) => expect(teachers).toEqual([teacher]));
    httpMock.expectOne('api/teachers').flush([teacher]);
    service.getTeacherById(1).subscribe((result) => expect(result).toEqual(teacher));
    httpMock.expectOne('api/teachers/1').flush(teacher);
  });
});
