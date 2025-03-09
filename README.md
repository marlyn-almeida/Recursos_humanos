Claro, aquí tienes todo el contenido que me proporcionaste convertido a Markdown en un solo documento:

```markdown
# Gestión de Recursos Humanos - Frontend

Este es el frontend de la aplicación de gestión de recursos humanos, desarrollado en **React** con **Tailwind CSS** para el diseño y varias bibliotecas para manejar la comunicación con la API y la generación de reportes en PDF.

## Tecnologías Utilizadas

- **React**: Framework para la interfaz de usuario.
- **Tailwind CSS**: Framework de estilos para un diseño moderno y responsivo.
- **React Router**: Para la navegación entre páginas.
- **Axios**: Para la comunicación con la API.
- **jsPDF & jsPDF-AutoTable**: Para la generación de reportes en PDF.

## Dependencias del Frontend

```bash
npm install react react-dom react-router-dom axios tailwindcss postcss autoprefixer jspdf jspdf-autotable @heroicons/react
npm install jspdf jspdf-autotable
```

## Creación de Bases de Datos en Docker

A continuación, realiza la creación de las bases de datos necesarias para la aplicación, dentro del contenedor Docker de **Postgres**:

1. **Accede al contenedor**:

   ```bash
   docker exec -it postgres-auth bash
   ```

2. **Conéctate a la base de datos de PostgreSQL**:

   ```bash
   psql -U admin -d postgres
   ```

3. **Ejecuta los siguientes comandos en PostgreSQL para crear las bases de datos**:

   ```sql
   CREATE DATABASE employee_db;
   CREATE DATABASE attendance_db;
   CREATE DATABASE evaluation_db;
   DROP DATABASE evaluation_db;
   CREATE DATABASE auth_db;
   ```

## Descripción

La aplicación de **gestión de recursos humanos** permite gestionar empleados, asistencias, evaluaciones y reportes. El sistema está diseñado para ser eficiente y fácil de usar, con una interfaz moderna gracias a **Tailwind CSS**.

La comunicación con el backend se maneja a través de **Axios**, y los reportes en formato PDF se generan utilizando **jsPDF** y **jsPDF-AutoTable**.

## Estructura del Proyecto

El proyecto sigue una estructura modular, organizada por páginas, componentes y contextos para la gestión del estado global:

- **Pages**: Componentes principales como Login, Home, Employees, etc.
- **Components**: Componentes reutilizables como Navbar, Sidebar, etc.
- **Context**: Contextos para gestionar el estado global, como el estado de autenticación y el sidebar.
```

