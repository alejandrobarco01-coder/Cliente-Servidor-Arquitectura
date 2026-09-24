import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TeachersTableComponent } from './teachers-table.component';

describe('TeachersTableComponent', () => {
  let component: TeachersTableComponent;
  let fixture: ComponentFixture<TeachersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TeachersTableComponent] }).compileComponents();
    fixture = TestBed.createComponent(TeachersTableComponent);
    component = fixture.componentInstance;
  });

  it('renderiza una fila por docente con sus datos', () => {
    component.teachers = [{ id: 1, name: 'Laura', lastName: 'Gómez', email: 'laura@uceva.edu.co', department: 'Sistemas', specialty: 'Web' }];
    fixture.detectChanges();
    const cells = fixture.debugElement.queryAll(By.css('tbody tr th, tbody tr td'));
    expect(cells.map((cell) => cell.nativeElement.textContent.trim())).toEqual(['1', 'Laura', 'Gómez', 'laura@uceva.edu.co', 'Sistemas', 'Web']);
  });
});
