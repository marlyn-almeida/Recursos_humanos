-- Crear base de datos
CREATE DATABASE evaluation_db;

-- Crear usuario con privilegios
CREATE USER admin WITH ENCRYPTED PASSWORD 'admin';

-- Conceder permisos al usuario
GRANT ALL PRIVILEGES ON DATABASE evaluation_db TO admin;
