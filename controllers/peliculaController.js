import { db } from "../db/conn.js";


const getpelicula = async (req,res)=>{

    try {
        const pelicula_nombre = req.params.pelicula_nombre;

        const sql = `select * from tbl_pelicula order by id`;

        const result = await db.query(sql, [pelicula_nombre]);

        if (result.length === 0) {
            res.status(404).json({ mensaje: "No hay registros" })
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }

}



const postpelicula = async (req, res)=>{


    const { pelicula_nombre , tipo_pelicula} = req.body;

    const params =  [pelicula_nombre , tipo_pelicula];
{

    try {
   

        const sql = `select pelicula_nombre,
                            tipo_pelicula
                        from tbl_pelicula where pelicula_nombre = $1`;

        const result = await db.query(sql, [pelicula_nombre]);

        if (result.length === 0) {
            res.status(404).json({ mensaje: "No hay registros" })
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }



}
    const sql = `insert into tbl_pelicula 
                (pelicula_nombre , tipo_pelicula )
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}


const putpelicula = async (req, res) => {
      
    try {

        const {pelicula_nombre, tipo_pelicula} = req.body;
        const id = req.params.id;

        const params = [pelicula_nombre, tipo_pelicula, id];
        
        const sql = `update tbl_pelicula 
                    set pelicula_nombre = $1, 
                        tipo_pelicula = $2
                    where pelicula_nombre = $3
                    returning pelicula_nombre, 'actualizado con exito' mensaje `;


                    
        const result = await db.query(sql, params);

        if (result.length === 0) {
            res.status(404).json({ mensaje: "Registro no existe no puede ser actualizado" })
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }

}



const deletepelicula = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_pelicula where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
    
}


export { deletepelicula, getpelicula, postpelicula, putpelicula };
    