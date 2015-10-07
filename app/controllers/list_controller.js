var path = require('path'),
    bodyParser = require('body-parser');

//models
var List = require('../models/list');
	
//collections
var Lists = require('../collections/lists');

//db
var bookshelf = require('../../database/schema');

//Index
exports.index = function (req,res){
	var lists = Lists;
	lists.fetch()
	.then(function (data){
		res.render('lists/index',{
			title: 'Lists of Things To Do',
			data: data.toJSON()
		})
	})
	.catch(function (error){
		console.error(error.stack);
		req.flash('errors', {'msg': error.message});
		res.redirect('/error');
	});
};

//Show
exports.show = function (req, res) {
	var listId = req.params.id;
	var list = new List({id: listId});

	list.fetch({
		withRelated: ['items']
	})
	.then(function (data){
		res.render('lists/show',{
			title: 'Your Lists',
			data: data.toJSON()
		})
	})
	.catch(function (error){
		console.error(error.stack);
		res.redirect('/error');
	});
};

//Create
exports.create = function(req, res){
	new List({
		name: req.body.name,
		description: req.body.description
	}).save()

	.then(function (data){
		res.redirect('/')
	})

	.catch(function (error){
		console.error(error.stack);
		res.redirect('/error');
	})

}

//Update form
exports.edit = function (req,res){
	var listId = req.params.id;
	var list = new List({id: listId});

	list.fetch()
	.then(function (data){
		res.render('lists/edit',{
			title: 'Edit Your List',
			data: data.toJSON()
		})
	})
	.catch(function (error){
		console.error(error.stack);
		res.redirect('/error');
	});
}

//Update submit
exports.update = function (req,res) {
	var listId = req.params.id;
	var updates = req.body;

	new List({id: listId})
	.fetch({require: true})
	.then(function (list){
		//list is table name
		list.save(
			{
				'name': req.body.name || list.get('name'), 
				'description': req.body.description || list.get('description')
			}
		)
		res.redirect('/')
	})
	.catch(function (error){
		console.error(error.stack);
		res.redirect('/error');
	})

}

//Destroy
exports.destroy = function (req,res){
	var listId = req.params.id;
	var updates = req.body;

	new List({id: listId})
	.fetch({require: true})
	.then(function (list){
		//list is table name
		list.destroy()
		res.redirect('/')
	})
	.catch(function (error){
		console.error(error.stack);
		res.redirect('/error');
	})

}