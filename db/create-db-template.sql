-- Active: 1709345729474@@127.0.0.1@5432
CREATE DATABASE oscart7

CREATE TABLE tbl_pelicula(  
    id  SERIAL NOT NULL PRIMARY KEY,
    pelicula_nombre VARCHAR(255),
    tipo_pelicula VARCHAR(100) CHECK (tipo_pelicula IN ('Pelicula Principales', 'Pelicula Internacional', 'Pelicula Animacion', 'Pelicula Documental', 'Drama', 'Biografia')),
    creacion TIMESTAMP DEFAULT current_timestamp
);


INSERT INTO tbl_pelicula (pelicula_nombre, tipo_pelicula)
VALUES
    ('American Fiction', 'Pelicula Principales'),
    ('Anatomía de una caída', 'Pelicula Principales'),
    ('Barbie', 'Pelicula Principales'),
    ('Los que se quedan', 'Pelicula Principales'),
    ('Los asesinos de la luna', 'Pelicula Principales'),
    ('Maestro', 'Pelicula Principales'),
    ('Oppenheimer', 'Pelicula Principales'),
    ('Vidas pasadas', 'Pelicula Principales'),
    ('Pobres criaturas', 'Pelicula Principales'),
    ('La zona de interés', 'Pelicula Principales'),
    ('La zona de interes','Pelicula Internacional'),
    ('Perfect Days', 'Pelicula Internacional'),
    ('La sociedad de la nieve', 'Pelicula Internacional'),
    ('Yo Capitan','Pelicula Internacional'),
    ('Sala de profesores', 'Pelicula Internacional'),
    ('El chico y la garza', 'Pelicula Animacion'),
    ('Elemental', 'Pelicula Animacion'),
    ('Nimona', 'Pelicula Animacion'),
    ('Robot Dreams', 'Pelicula Animacion'),
    ('Spider-Man: Cruzando el Multiverso', 'Pelicula Animacion'),
    ('The People’s President', 'Pelicula Documental'),
    ('La memoria infinita', 'Pelicula Documental'),
    ('Four Daughters ', 'Pelicula Documental'),
    ('To Kill a Tiger', 'Pelicula Documental'),
    ('20 días en Mariúpol', 'Pelicula Documental'),
    ('Nyad', 'Biografia'),
    ('Rustin', 'Drama'),
    ('El color purpura', 'Drama');

    SELECT * FROM tbl_pelicula

