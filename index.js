const { join } = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));

app.use('/', express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;
