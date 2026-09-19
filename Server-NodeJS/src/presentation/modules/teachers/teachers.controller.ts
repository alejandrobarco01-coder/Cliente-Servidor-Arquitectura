import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { TeachersService } from './teachers.service';

export class TeachersController {
  private readonly teachersService = new TeachersService();

  getAllTeachers = (_req: Request, res: Response): void => {
    this.teachersService
      .getAllTeachers()
      .then((teachers) => res.status(200).json(teachers))
      .catch((error) => HandleError.error(error, res));
  };

  getTeacherById = (req: Request, res: Response): void => {
    this.teachersService
      .getTeacherById(Number(req.params.id))
      .then((teacher) => res.status(200).json(teacher))
      .catch((error) => HandleError.error(error, res));
  };
}
