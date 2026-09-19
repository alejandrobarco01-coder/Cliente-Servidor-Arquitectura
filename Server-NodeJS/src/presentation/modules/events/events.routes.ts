import { Router } from 'express';
import { EventsController } from './events.controller';

export class EventsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new EventsController();
    /** @openapi
     * /api/events:
     *   get:
     *     summary: Obtener listado de eventos académicos
     *     tags: [Events]
     *     responses:
     *       200:
     *         description: Listado de eventos
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: { $ref: '#/components/schemas/AcademicEvent' }
     */
    router.get('/', controller.getAllEvents);
    /** @openapi
     * /api/events/{id}:
     *   get:
     *     summary: Obtener un evento por identificador
     *     tags: [Events]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema: { type: integer, minimum: 1 }
     *         example: 1
     *     responses:
     *       200:
     *         description: Evento encontrado
     *         content:
     *           application/json:
     *             schema: { $ref: '#/components/schemas/AcademicEvent' }
     *       400: { description: Identificador inválido }
     */
    router.get('/:id', controller.getEventById);
    return router;
  }
}
