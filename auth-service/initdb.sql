-- Crear base de datos
CREATE DATABASE auth_db;

-- Crear usuario con privilegios
CREATE USER admin WITH ENCRYPTED PASSWORD 'admin';

-- Conceder permisos al usuario
GRANT ALL PRIVILEGES ON DATABASE auth_db TO admin;
