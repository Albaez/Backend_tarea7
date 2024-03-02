import dotenv from 'dotenv';
import pg from 'pg-promise';
dotenv.config();
const pgp = pg()

const user=process.env._user;
const pass = process.env._pass;
const dataBase = process.env._db;
const host = process.env._host;



const cnstr = `postgresql://${user}:${pass}@${host}:5432/${dataBase}`; 
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db };
