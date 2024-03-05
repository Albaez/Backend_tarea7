import Express from "express";
const pelicula = Express();

import {
    deletepelicula,
    getpelicula,
    postpelicula,
    putpelicula
} from "../controllers/peliculaController.js";


pelicula.get('/:pelicula_nombre', getpelicula);
    
pelicula.post('', postpelicula);

pelicula.put('/:pelicula_nombre', putpelicula);

pelicula.delete('/:pelicula_nombre', deletepelicula);

export {
    pelicula
};
