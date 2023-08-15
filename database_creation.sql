CREATE DATABASE MiBaseDeDatos; -- Si aún no tienes una base de datos
USE MiBaseDeDatos; -- Reemplaza "MiBaseDeDatos" con el nombre de tu base de datos

CREATE TABLE usuario_nuevo (
    id INT IDENTITY(1,1) PRIMARY KEY,
    correo NVARCHAR(255) NOT NULL,
    contrasena NVARCHAR(255) NOT NULL,
    fecha_creacion DATETIME NOT NULL
);