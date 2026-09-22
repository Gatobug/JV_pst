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

        res.render('post/index', {

        });

    } catch (error) {

    }
    

}

const creat = async (req, res) => {

}