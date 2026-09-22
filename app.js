require('dotenv').config();
const express = require('express');

const postRoutes = require('./routes/postRoutes');

const app = express();

const PORT = process.env.PORT;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true})); // Lee info de formularios

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('(/posts');
});

app.use('/post', postRoutes);

app.listen(PORT, () => {
    console.log('Server UP!');
});