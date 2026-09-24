import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoursesTableComponent } from './courses-table.component';

describe('CoursesTableComponent', () => {
  let component: CoursesTableComponent;
  let fixture: ComponentFixture<CoursesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CoursesTableComponent] }).compileComponents();
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
  });

  it('renderiza una fila por curso con sus datos', () => {
    component.courses = [{ id: 1, name: 'Arquitectura', code: 'ASI-401', credits: 3, semester: 7, area: 'Software' }];
    fixture.detectChanges();
    const cells = fixture.debugElement.queryAll(By.css('tbody tr th, tbody tr td'));
    expect(cells.map((cell) => cell.nativeElement.textContent.trim())).toEqual(['1', 'Arquitectura', 'ASI-401', '3', '7', 'Software']);
  });
});
