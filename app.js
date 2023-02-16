const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clienstRouter = require('./routes/clients')

const conection = require('./db/dbConection')

const app = express();

//MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//RUTAS
app.use('/', indexRouter); //ruta principal
app.use('/users', usersRouter);
app.use('/clients', clienstRouter);

//CONEXION A DB
conection();

module.exports = app;
