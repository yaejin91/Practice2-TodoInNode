var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	bodyParser = require('body-parser');

//database
var bookshelf = require('./database/schema');

//models
var List = require('./app/models/list.js'),
	Item = require('./app/models/item.js');

//collections
var Lists = require('./app/collections/lists'),
	Items = require('./app/collections/items');

//view engine setup
app.set('views', path.join(__dirname, 'app/views'));

//run jade file
app.set('view engine', 'jade');

//get all owners
//This is the route
app.get('/', function (req,res){
	var lists = Lists;
	lists.fetch()
	.then(function (data){
		console.log(data.toJSON())
		res.redner('index',{
			title: 'Lists of Things To Do',
			data: data.toJSON
		})
		res.send('Message')
	})
	.catch(function (error){
		console.error(error.stack);
		req.flash('errors', {'msg': error.message});
		res.redirect('/');
	});
});

app.listen(3000)