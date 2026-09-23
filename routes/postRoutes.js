const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// Listar todos los posts
router.get('/', postController.index);

router.get('/create', postController.create);

router.post('/create', postController.store);

module.exports = router;