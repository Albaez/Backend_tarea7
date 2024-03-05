import cors from 'cors';
import Express from "express";
import { pelicula } from "./route/api_pelicula.js";
const app = Express();

// Middleware 
app.use(Express.json());
const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']

}
app.use(cors(corsOptions));
// Rutas
app.use('/api/pelicula', pelicula);


//Puerto
app.listen(4000, ()=>{

    console.log("Esuchando en el puerto 4000");

});