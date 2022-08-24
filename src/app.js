// Require's
const express = require('express');
const path = require("path");

// Creating express objet
const app = express();

// Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set ("view engine", "ejs");

// Using resources from public
app.use(express.static('./public'));

const mainRouter = require('./routes/mainRouter');

// Home section + route
app.use('/', mainRouter);

// Server Listen
app.listen(3500, () => {console.log('Server running on http://localhost:3500');})