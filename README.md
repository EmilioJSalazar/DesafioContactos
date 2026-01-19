# Desafío Técnico - Contactos Fullstack 📒

Aplicación web Fullstack para la gestión de contactos. Permite crear, listar, buscar, editar y eliminar registros mediante una API REST y una interfaz moderna.

El proyecto cuenta con **persistencia de datos** en un archivo JSON local, asegurando que la información no se pierda al reiniciar el servidor.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** Angular (TypeScript) + Bootstrap
* **Backend:** C# .NET Web API
* **Persistencia:** JSON File Storage (System.IO)

## 📋 Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado:
* [.NET SDK](https://dotnet.microsoft.com/download)
* [Node.js](https://nodejs.org/)

## 🚀 Instrucciones de Ejecución

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
**Desarrollado por:** Emilio Salazar