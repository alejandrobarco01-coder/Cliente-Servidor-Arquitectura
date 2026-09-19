import { Router } from 'express';
import { CoursesController } from './courses.controller';

export class CoursesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CoursesController();

    /**
     * @openapi
     * /api/courses:
     *   get:
     *     summary: Obtener listado de cursos
     *     tags: [Courses]
     *     responses:
     *       200:
     *         description: Listado de cursos académicos
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Course'
     */
    router.get('/', controller.getAllCourses);

    /**
     * @openapi
     * /api/courses/{id}:
     *   get:
     *     summary: Obtener un curso por identificador
     *     tags: [Courses]
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
     *         description: Curso encontrado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Course'
     *       400:
     *         description: Identificador inválido
     */
    router.get('/:id', controller.getCourseById);

    return router;
  }
}
