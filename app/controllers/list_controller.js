var express = require('express'),
    app = express(),
    router = express.Router(),
    path = require('path'),
    bodyParser = require('body-parser');

//database
var bookshelf = require('./database/schema');

//models
var List = require('./app/models/list'),
	
//collections
var Lists = require('./app/collections/lists'),

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');