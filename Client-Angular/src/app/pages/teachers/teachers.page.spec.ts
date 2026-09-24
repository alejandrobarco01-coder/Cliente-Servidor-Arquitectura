import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { TeachersService } from '../../services/teachers/teachers.service';
import { TeachersPage } from './teachers.page';

describe('TeachersPage', () => {
  let component: TeachersPage;
  let fixture: ComponentFixture<TeachersPage>;
  let service: TeachersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TeachersPage], providers: [provideHttpClient()] }).compileComponents();
    fixture = TestBed.createComponent(TeachersPage);
    component = fixture.componentInstance;
    service = TestBed.inject(TeachersService);
  });

  it('muestra los docentes al completar la consulta', () => {
    const teachers = [{ id: 1, name: 'Laura', lastName: 'Gómez', email: 'laura@uceva.edu.co', department: 'Sistemas', specialty: 'Web' }];
    jest.spyOn(service, 'getAllTeachers').mockReturnValue(of(teachers));
    fixture.detectChanges();
    expect(component.state).toBe('success');
    expect(component.teachers).toEqual(teachers);
  });

  it('muestra estado de error si falla la consulta', () => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    jest.spyOn(service, 'getAllTeachers').mockReturnValue(throwError(() => new Error('falló')));
    fixture.detectChanges();
    expect(component.state).toBe('error');
  });
});
