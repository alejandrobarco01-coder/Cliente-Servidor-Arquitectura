# Contrato de API: módulos académicos

Este contrato define la integración entre el cliente Angular y los nuevos módulos del servidor. Las respuestas se generan en memoria con Faker, por lo que sus valores cambian en cada solicitud; la estructura se mantiene estable.

## Convenciones generales

- URL base local: `http://localhost:3000`.
- Formato de respuesta: JSON.
- Listados: código `200` y un arreglo JSON.
- Recurso inexistente: código `404` y el formato `{ "error": "..." }`.
- Identificadores: enteros positivos iniciando en `1`.

## Cursos

| Operación | Ruta | Respuesta |
| --- | --- | --- |
| Listar cursos | `GET /api/courses` | `Course[]` |
| Consultar curso | `GET /api/courses/:id` | `Course` |

```json
{
  "id": 1,
  "name": "Arquitectura de Software",
  "code": "ASI-401",
  "credits": 3,
  "semester": 7,
  "area": "Ingeniería de software"
}
```

## Docentes

| Operación | Ruta | Respuesta |
| --- | --- | --- |
| Listar docentes | `GET /api/teachers` | `Teacher[]` |
| Consultar docente | `GET /api/teachers/:id` | `Teacher` |

```json
{
  "id": 1,
  "name": "Laura",
  "lastName": "Gómez",
  "email": "laura.gomez@uceva.edu.co",
  "department": "Ingeniería de Sistemas",
  "specialty": "Desarrollo web"
}
```

## Eventos

| Operación | Ruta | Respuesta |
| --- | --- | --- |
| Listar eventos | `GET /api/events` | `AcademicEvent[]` |
| Consultar evento | `GET /api/events/:id` | `AcademicEvent` |

```json
{
  "id": 1,
  "title": "Seminario de innovación tecnológica",
  "date": "2026-10-15",
  "location": "Auditorio UCEVA",
  "type": "Seminario",
  "capacity": 120
}
```

## Alcance

El repositorio base solo expone operaciones de consulta con datos generados dinámicamente. Por consistencia con ese patrón, este contrato no incluye `POST`, `PUT` ni `DELETE`.
