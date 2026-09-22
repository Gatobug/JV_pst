const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// Listar todos los posts
router.get('/', postController.index);

module.exports = router;