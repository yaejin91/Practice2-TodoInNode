var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	bodyParser = require('body-parser');

//database
var bookshelf = require('./database/schema');

//models
var List = require('./app/models/list'),
	Item = require('./app/models/item');

//collections
var Lists = require('./app/collections/lists'),
	Items = require('./app/collections/items');

//controllers
var ListController = require('./app/controllers/list_controller.js');
var ItemController = require('./app/controllers/item_controller.js');

//view engine setup
app.set('views', path.join(__dirname, 'app/views'));

//run jade file
app.set('view engine', 'jade');

//routes for lists
app.get('/',ListController.index)
app.get('/lists/:id',ListController.show)
app.post('/lists', ListController.create)

//routes for items
app.get('/items',ItemController.index)
app.get('/items/:id',ItemController.show)

app.listen(3000);
console.log('Listening to port 3000');