var express = require('express'),
    app = express(),
    router = express.Router(),
    path = require('path'),
    bodyParser = require('body-parser');

//database
var bookshelf = require('./database/schema');

//models
var	Item = require('./app/models/item');

//collections
var Items = require('./app/collections/items');

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');