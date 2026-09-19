import { Router } from 'express';
import { TeachersController } from './teachers.controller';

export class TeachersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TeachersController();

    /**
     * @openapi
     * /api/teachers:
     *   get:
     *     summary: Obtener listado de docentes
     *     tags: [Teachers]
     *     responses:
     *       200:
     *         description: Listado de docentes
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Teacher'
     */
    router.get('/', controller.getAllTeachers);

    /**
     * @openapi
     * /api/teachers/{id}:
     *   get:
     *     summary: Obtener un docente por identificador
     *     tags: [Teachers]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *         example: 1
     *     responses:
     *       200:
     *         description: Docente encontrado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Teacher'
     *       400:
     *         description: Identificador inválido
     */
    router.get('/:id', controller.getTeacherById);

    return router;
  }
}
