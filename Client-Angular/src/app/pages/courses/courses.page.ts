import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { CoursesTableComponent } from '../../components/courses-table/courses-table.component';
import { Course } from '../../interfaces/course.interface';
import { State } from '../../interfaces/state.interface';
import { CoursesService } from '../../services/courses/courses.service';

/** Carga y presenta los cursos académicos. */
@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  imports: [AlertComponent, CoursesTableComponent],
})
export class CoursesPage {
  courses: Course[] = [];
  state: State = 'init';
  private readonly coursesService = inject(CoursesService);

  ngOnInit(): void {
    this.state = 'loading';
    this.coursesService.getAllCourses().subscribe({
      next: (courses) => { this.courses = courses; this.state = 'success'; },
      error: (error) => { console.error(error); this.state = 'error'; },
    });
  }
}
