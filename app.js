const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
require('./mongoConfig');

const bonsaiRouter = require('./routes/bonsai.js');
const usersRouter = require('./routes/users.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bonsai', bonsaiRouter);
app.use('/users', usersRouter);

module.exports = app;
