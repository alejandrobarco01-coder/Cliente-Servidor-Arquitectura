import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventsTableComponent } from './events-table.component';

describe('EventsTableComponent', () => {
  let component: EventsTableComponent;
  let fixture: ComponentFixture<EventsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [EventsTableComponent] }).compileComponents();
    fixture = TestBed.createComponent(EventsTableComponent);
    component = fixture.componentInstance;
  });

  it('renderiza una fila por evento con sus datos', () => {
    component.events = [{ id: 1, title: 'Seminario', date: '2026-10-15', location: 'UCEVA', type: 'Seminario', capacity: 120 }];
    fixture.detectChanges();
    const cells = fixture.debugElement.queryAll(By.css('tbody tr th, tbody tr td'));
    expect(cells.map((cell) => cell.nativeElement.textContent.trim())).toEqual(['1', 'Seminario', '2026-10-15', 'UCEVA', 'Seminario', '120']);
  });
});
