var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var empleadosRouter = require('./routes/ejercicioEmpleados');
var convertidorRouter = require('./routes/ejecicioConvertidor');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', empleadosRouter);
app.use('/', convertidorRouter);

module.exports = app;
