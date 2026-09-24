import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CoursesService } from '../../services/courses/courses.service';
import { CoursesPage } from './courses.page';

describe('CoursesPage', () => {
  let component: CoursesPage;
  let fixture: ComponentFixture<CoursesPage>;
  let service: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CoursesPage], providers: [provideHttpClient()] }).compileComponents();
    fixture = TestBed.createComponent(CoursesPage);
    component = fixture.componentInstance;
    service = TestBed.inject(CoursesService);
  });

  it('muestra los cursos al completar la consulta', () => {
    const courses = [{ id: 1, name: 'Arquitectura', code: 'ASI-401', credits: 3, semester: 7, area: 'Software' }];
    jest.spyOn(service, 'getAllCourses').mockReturnValue(of(courses));
    fixture.detectChanges();
    expect(component.state).toBe('success');
    expect(component.courses).toEqual(courses);
  });

  it('muestra estado de error si falla la consulta', () => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    jest.spyOn(service, 'getAllCourses').mockReturnValue(throwError(() => new Error('falló')));
    fixture.detectChanges();
    expect(component.state).toBe('error');
  });
});
