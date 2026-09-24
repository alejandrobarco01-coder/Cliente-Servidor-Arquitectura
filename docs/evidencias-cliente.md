# Evidencias del cliente Angular

## Arquitectura aplicada

El cliente conserva la separación existente: interfaces en `src/app/interfaces`, servicios HTTP en `src/app/services`, páginas contenedoras en `src/app/pages` y tablas reutilizables en `src/app/components`. Las rutas relativas `api/...` pasan por el interceptor existente, que las dirige a `http://localhost:3000`.

## Módulos consumidos

- Cursos: `GET /api/courses` y `GET /api/courses/:id`.
- Docentes: `GET /api/teachers` y `GET /api/teachers/:id`.
- Eventos: `GET /api/events` y `GET /api/events/:id`.

## Verificación ejecutada

En una terminal, desde `Server-NodeJS`:

```bash
PORT=3000 PUBLIC_PATH=public npx ts-node src/app.ts
```

En otra, desde `Client-Angular`:

```bash
npm test -- --runInBand
npm run build
npm run compodoc
npm start
```

Resultados obtenidos el 2026-09-24:

- Jest: 18 suites y 53 pruebas aprobadas, incluidas las pruebas HTTP de servicios y las pruebas de páginas y tablas nuevas.
- Build de Angular: generado correctamente en `Client-Angular/dist/Angular-Standalone-Template`. Se conserva una advertencia preexistente del presupuesto inicial de 500 kB; el bundle total es 691.15 kB.
- Compodoc: generado correctamente en `Client-Angular/documentation`.
- API real: se inició el servidor temporalmente y devolvió HTTP 200 con arreglos JSON para `GET /api/courses`, `GET /api/teachers` y `GET /api/events`.

La comprobación del consumo en el cliente se cubre mediante los servicios Angular, que emiten las solicitudes relativas `api/courses`, `api/teachers` y `api/events`; el interceptor existente las convierte en `http://localhost:3000/api/...`. Abrir `http://localhost:4200/courses`, `/teachers` y `/events` con ambos procesos activos muestra las tablas. Cada página incluye los estados de carga, error y éxito.

Los datos son dinámicos porque el servidor usa Faker; por ello la evidencia valida la estructura y el código de respuesta, no valores exactos.
