const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// Listar todos los posts
router.get('/', postController.index);

router.get('/create', postController.create);

router.post('/create', postController.store);

// Ver post
router.get('/:id', postController.show); //Todo lo que viene de un formalario que en REQ.BODY y lo que viene de una URL en REQ.PARAMS

// Editar
router.get('/:id/edit', postController.edit);

// Actualizar
router.post('/:id/edit', postController.update);


module.exports = router;