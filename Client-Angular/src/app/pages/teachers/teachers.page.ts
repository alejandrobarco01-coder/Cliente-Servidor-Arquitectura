import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { TeachersTableComponent } from '../../components/teachers-table/teachers-table.component';
import { State } from '../../interfaces/state.interface';
import { Teacher } from '../../interfaces/teacher.interface';
import { TeachersService } from '../../services/teachers/teachers.service';

/** Carga y presenta los docentes. */
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  imports: [AlertComponent, TeachersTableComponent],
})
export class TeachersPage {
  teachers: Teacher[] = [];
  state: State = 'init';
  private readonly teachersService = inject(TeachersService);

  ngOnInit(): void {
    this.state = 'loading';
    this.teachersService.getAllTeachers().subscribe({
      next: (teachers) => { this.teachers = teachers; this.state = 'success'; },
      error: (error) => { console.error(error); this.state = 'error'; },
    });
  }
}
