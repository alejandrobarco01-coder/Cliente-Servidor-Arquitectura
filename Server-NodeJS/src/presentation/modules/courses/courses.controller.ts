import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { CoursesService } from './courses.service';

export class CoursesController {
  private readonly coursesService = new CoursesService();

  getAllCourses = (_req: Request, res: Response): void => {
    this.coursesService
      .getAllCourses()
      .then((courses) => res.status(200).json(courses))
      .catch((error) => HandleError.error(error, res));
  };

  getCourseById = (req: Request, res: Response): void => {
    this.coursesService
      .getCourseById(Number(req.params.id))
      .then((course) => res.status(200).json(course))
      .catch((error) => HandleError.error(error, res));
  };
}
