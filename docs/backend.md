# Backend Node.js

El servidor usa Express y TypeScript. `src/app.ts` inicia `Server`; este configura CORS, JSON, rutas y Swagger. Cada petición llega a `presentation/routes.ts`, pasa al módulo correspondiente (`routes` → `controller` → `service`) y responde JSON. Las interfaces viven en `domain/interfaces` y Faker genera los datos en memoria.

## Módulos añadidos

- Cursos: `GET /api/courses`, `GET /api/courses/:id`.
- Docentes: `GET /api/teachers`, `GET /api/teachers/:id`.
- Eventos: `GET /api/events`, `GET /api/events/:id`.

Swagger está disponible en `/api-docs` y se conserva `/api/docs`. Para ejecutar: desde `Server-NodeJS`, `npm install` y `npm run start`.
