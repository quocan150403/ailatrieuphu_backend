var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var route = require('./routes');
var { connect } = require('./config/db.config');

var app = express();

// Connect to MongoDB
connect();

// CORS
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Init routes
route(app);

module.exports = app;
