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


// Cuando usar async y await, cuando sea una consulta de datos o procesar datos, y sin nada cuando sea sin consulta
const create = (req, res) => {
    res.render('posts/create');
}

const store = async (req, res) => {

    try {
        const { title, body } = req.body; // Sacar datos de un formulario
        
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

const show = async (req, res) => {
    try {
        const { id } = req.params;

        const [posts] = await db.query(
            'SELECT * FROM posts where id = ?',
            [id]

        );
        
        //Validar

        if (posts.length === 0) {
            return res.status(404).send('Post no encontrado.')
        }

        res.render('posts/show', {
            post: posts[0]
        } 
        );


    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    };
};

const edit = async (req, res) => { // Todo lo que viene de una URL se GUARDA EN REQ.PARAMS. TODO LO QUE VIENE DE UN FORMULARIO SE GUARDA REQ.BODY
    try {
        const { id } = req.params;

        const [post] = await db.query (
            'SELECT * FROM posts WHERE id = ?'
            [id]
        );

        if (post.length === 0) {
            return res.status(404).send('Post no encontrado');
        }

        res.render('posts/edit', {
            churro: posts[0]
        })
    } catch (error) {

    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;

        const { title, body } = req.body;

        if (!title || !body) {
            console.log('Faltan campos.')
        }

        await db.query (
            'UPDATE posts SET title = ?, body = ? WHERE id = ?'
            [title, body, id]
        )

        res.redirect('/posts');

    }   catch (error) {

    }
}

module.exports = {
    index,
    create,
    store,
    show,
    edit,
    update
};