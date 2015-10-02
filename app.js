var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	bodyParser = require('body-parser');

//database

var bookshelf = require('./schema');

//models

var Owner = require('./models/owner'),
	Turtle = require('.models/turtle');

//collections

var Owners = require('./collections/owners'),
	Turtles = require('./collections/turtles');

//view engine setup
app.set('views', path.join(__dirname, 'views'));

//run jade file
app.set('view engine', 'jade');

//get all owners
app.get('/', function (req,res){
	var owners = Owners;
	owners.fetch()
	.then(function (data){
		console.log(data.toJSON())
		res.redner('index',{
			title: 'Owners',
			data: data
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