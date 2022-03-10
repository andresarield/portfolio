const express = require('express');
const path = require("path");
const http = require("http");


//Express
const app = express();

// Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set ("view engine", "ejs");

app.use(express.static('./public'));


const mainRouter = require('./routes/mainRouter');

app.use('/', mainRouter);

// Server Listen
app.listen(3500, () => { console.log('Servidor corriendo en http://localhost:3500');})