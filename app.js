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
var ListController = require('./app/controllers/list_controller.js'),
	ItemController = require('./app/controllers/item_controller.js');

//view engine setup
app.set('views', path.join(__dirname, 'app/views'));

//using body parser
app.use(bodyParser.urlencoded({extended:false}))

//run jade file
app.set('view engine', 'jade');

//routes for lists
//index
app.get('/',ListController.index)

//show
app.get('/lists/:id',ListController.show)

//create
app.post('/lists/create', ListController.create)

//update
//to load the template that shows the jade file
app.get('/lists/edit/:id', ListController.edit)
app.post('/lists/edit/:id', ListController.update)

//delete
app.get('/lists/delete/:id', ListController.destroy)

//routes for items
//create
app.post('/lists/:id',ItemController.create)

//update
//to load the template that shows the jade file
app.get('/lists/:listId/items/:itemId/', ItemController.edit)
app.post('/lists/:listId/items/:itemId/', ItemController.update)

//delete
app.get('/lists/:listId/items/:itemId/', ItemController.destroy)

app.listen(3000);
console.log('Listening to port 3000');