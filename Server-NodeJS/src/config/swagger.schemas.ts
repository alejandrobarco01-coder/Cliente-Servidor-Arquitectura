/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required: [id, name, lastName, email, department, specialty]
 *       properties:
 *         id: { type: integer, example: 1 }
 *         name: { type: string, example: Laura }
 *         lastName: { type: string, example: Gómez }
 *         email: { type: string, format: email, example: laura.gomez@uceva.edu.co }
 *         department: { type: string, example: Ingeniería de Sistemas }
 *         specialty: { type: string, example: Desarrollo web }
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required: [id, name, code, credits, semester, area]
 *       properties:
 *         id: { type: integer, example: 1 }
 *         name: { type: string, example: Arquitectura de Software }
 *         code: { type: string, example: ASI-401 }
 *         credits: { type: integer, example: 3 }
 *         semester: { type: integer, example: 7 }
 *         area: { type: string, example: Ingeniería de software }
 */
export {};
