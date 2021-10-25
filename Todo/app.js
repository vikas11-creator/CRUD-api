const express = require('express');
const app = express()
const morgan = require('morgan');
const bodyParser = require("body-parser");


const todoRoutes = require('./api/routes/todo');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/todo', todoRoutes);
module.exports = app;