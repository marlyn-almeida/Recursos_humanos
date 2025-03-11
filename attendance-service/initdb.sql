-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS attendance_db;

-- Crear el usuario 'admin' con la contraseña 'admin'
CREATE USER IF NOT EXISTS admin WITH ENCRYPTED PASSWORD 'admin';

-- Conceder todos los privilegios al usuario 'admin' en la base de datos 'attendance_db'
GRANT ALL PRIVILEGES ON DATABASE attendance_db TO admin;
