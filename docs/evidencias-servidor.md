# Evidencias del servidor

Verificación de compilación ejecutada desde `Server-NodeJS`:

```powershell
npx tsc --noEmit
```

Resultado: compilación exitosa, sin salida de errores.

Para validar los endpoints en ejecución:

```powershell
curl http://localhost:3000/api/courses
curl http://localhost:3000/api/courses/1
curl http://localhost:3000/api/teachers
curl http://localhost:3000/api/teachers/1
curl http://localhost:3000/api/events
curl http://localhost:3000/api/events/1
```
