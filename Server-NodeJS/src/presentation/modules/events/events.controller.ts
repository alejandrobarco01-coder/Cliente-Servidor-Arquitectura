import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { EventsService } from './events.service';

export class EventsController {
  private readonly eventsService = new EventsService();
  getAllEvents = (_req: Request, res: Response): void => {
    this.eventsService.getAllEvents().then((events) => res.status(200).json(events)).catch((error) => HandleError.error(error, res));
  };
  getEventById = (req: Request, res: Response): void => {
    this.eventsService.getEventById(Number(req.params.id)).then((event) => res.status(200).json(event)).catch((error) => HandleError.error(error, res));
  };
}
