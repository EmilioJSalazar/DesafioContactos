# Desafío Técnico - Contactos Fullstack

Aplicación web Fullstack para la gestión de contactos. Permite crear, listar, buscar, editar y eliminar registros mediante una API REST y una interfaz moderna.

El proyecto cuenta con **persistencia de datos** en un archivo JSON local, asegurando que la información no se pierda al reiniciar el servidor.

## Tecnologías Utilizadas

* **Frontend:** Angular (TypeScript) + Bootstrap
* **Backend:** C# .NET Web API
* **Persistencia:** JSON File Storage (System.IO)

## Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado:
* [.NET SDK](https://dotnet.microsoft.com/download)
* [Node.js](https://nodejs.org/)

## Instrucciones de Ejecución

Sigue estos pasos en orden para levantar el entorno de desarrollo.

### 1. Iniciar el Backend (API)
Abre una terminal en la carpeta raíz y ejecuta:

```bash
cd backend
dotnet watch run
```
*El servidor escuchará peticiones y se reiniciará automáticamente si haces cambios en el código (Hot Reload).*

### 2. Iniciar el Frontend (Cliente)
Abre una **nueva terminal** en la carpeta raíz y ejecuta:

```bash
cd frontend
npm install
npx ng serve -o
```
* `npm install`: Descarga las librerías necesarias (solo la primera vez).
* `npx ng serve -o`: Inicia Angular y abre el navegador automáticamente en `http://localhost:4200`.

---
## Capturas de Pantalla

### Listar
<img width="2559" height="1029" alt="image" src="https://github.com/user-attachments/assets/5b78648a-13cc-4a3b-988e-24c33dc973f0" />

### Crear
<img width="2559" height="1461" alt="image" src="https://github.com/user-attachments/assets/52e75f1d-c454-4307-8643-426f55171419" />
<img width="2559" height="664" alt="image" src="https://github.com/user-attachments/assets/b55e94e6-a54b-430e-bfc5-0da6991bf9c6" />

### Validaciones
<img width="1280" height="731" alt="image" src="https://github.com/user-attachments/assets/94c320b8-2b64-47ac-a32d-e6e7947e561a" />

### Buscar en tiempo real
<img width="2559" height="868" alt="image" src="https://github.com/user-attachments/assets/d92fe390-445f-4234-9657-27b34b5f91f4" />

### Editar
<img width="2559" height="1458" alt="image" src="https://github.com/user-attachments/assets/6541a3df-ac5f-421a-8de5-9a62b511b186" />
<img width="2559" height="743" alt="image" src="https://github.com/user-attachments/assets/9afccb6f-a386-4d07-bb78-885548ba7fa1" />
<img width="2559" height="823" alt="image" src="https://github.com/user-attachments/assets/ce56efd4-0247-4cc2-b5dd-179159149eb4" />

### Eliminar
<img width="2559" height="864" alt="image" src="https://github.com/user-attachments/assets/c74b4327-f320-4590-a317-639172ae79a8" />
<img width="2559" height="770" alt="image" src="https://github.com/user-attachments/assets/eaeb83d4-aff7-4c2f-be65-ec9145d8671b" />

---
**Desarrollado por:** Emilio Salazar
