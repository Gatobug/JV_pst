// Instalar MSQL2
//CREAR DB
// CREAR SCHEMA.SQL
// PREPARAR EL .ENV CON LOS DATOS DEL SERVIDOR
// PREPARAR ARCHIVO DE CONEXION NODE-AQL
//CONFIG/DB.JS

const db = require('../config/db');


//=======================
//Listar todo los post
//=======================
const index = async (req, res) => {
    
    try {
        
        const [posts] = await db.query(
            'SELECT * FROM posts ORDEN BY id DESC'
        );
        console.log(posts);
        res.render('posts/index', {
            posts
        });

    } catch (error) {
            console.log(error)
    }
    

}

const create = async (req, res) => {

}

module.exports = {
    index,
    create
};