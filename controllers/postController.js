// Instalar MSQL2
//CREAR DB
// CREAR SCHEMA.SQL
// PREPARAR EL .ENV CON LOS DATOS DEL SERVIDOR
// PREPARAR ARCHIVO DE CONEXION NODE-AQL
//CONFIG/DB.JS

const { render } = require('ejs');
const db = require('../config/db');


//=======================
//Listar todo los post
//=======================
const index = async (req, res) => {
    
    try {
        
        const [posts] = await db.query(
            'SELECT * FROM posts ORDER BY id DESC'
        );
        console.log(posts);
        res.render('posts/index', {
            posts
        });

    } catch (error) {
            console.log(error)
    }
    

}


// Cuando usar async y await, cuando sea una consulta de datos o procesar datos y sin nada cuando sea sin consulta
const create = (req, res) => {
    res.render('posts/create');
}

const store = async (req, res) => {

    try {
        const { title, body } = req.body;
        
        // Validamos
        if (!title || !body) {
            console.log('Faltan campos por rellenar')
        }

        await db.query(
            'INSERT INTO posts (title, body) VALUES (?, ?)',
            [title, body]
        );

        console.log('Datos guardados');
        res.redirect('/posts');

    } catch (error) {
        console.log(error);
        console.log('Sucedio un error en el servidor.')
        res.redirect('/posts');
    }
    
};

module.exports = {
    index,
    create,
    store
};