Gestión de Recursos Humanos - Frontend
Este es el frontend de la aplicación de gestión de recursos humanos, desarrollado en React con Tailwind CSS para el diseño y varias bibliotecas para manejar la comunicación con la API y la generación de reportes en PDF.

Tecnologías Utilizadas
React: Framework para la interfaz de usuario.
Tailwind CSS: Framework de estilos para un diseño moderno y responsivo.
React Router: Para la navegación entre páginas.
Axios: Para la comunicación con la API.
jspdf & jspdf-autotable: Para la generación de reportes en PDF.

dependencias del front
npm install react react-dom react-router-dom axios tailwindcss postcss autoprefixer jspdf jspdf-autotable @heroicons/react
npm install jspdf jspdf-autotable

Creacion de las bases en imagen de postman en docker 
docker exec -it postgres-auth bash
psql -U admin -d postgres
CREATE DATABASE employee_db;
CREATE DATABASE attendance_db;
CREATE DATABASE evaluation_db;
DROP DATABASE evaluation_db;
CREATE DATABASE auth_db;
