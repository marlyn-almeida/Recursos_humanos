-- Crear usuario si no existe
DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'admin') THEN
CREATE ROLE admin WITH LOGIN PASSWORD 'admin';
END IF;
END
$do$;

-- Crear base de datos si no existe
DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'attendance_db') THEN
      CREATE DATABASE attendance_db;
END IF;
END
$do$;

-- Conceder permisos al usuario sobre la base de datos
GRANT ALL PRIVILEGES ON DATABASE attendance_db TO admin;
