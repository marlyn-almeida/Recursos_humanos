-- Crear base de datos
CREATE DATABASE employee_db;

-- Crear usuario con privilegios
CREATE USER admin WITH ENCRYPTED PASSWORD 'admin';

-- Conceder permisos al usuario
GRANT ALL PRIVILEGES ON DATABASE employee_db TO admin;
