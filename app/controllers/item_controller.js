var path = require('path'),
    bodyParser = require('body-parser');

//models
var	Item = require('../models/item');

//collections
var Items = require('../collections/items');

//db
var bookshelf = require('../../database/schema');

//Create
exports.create = function(req, res){
	var listId = req.params.id;
	new Item({
		name: req.body.name,
		description: req.body.description,
		list_id: listId
	}).save()

	.then(function (data){
		console.log(data.name + " created")
		res.redirect('/lists/'+listId)
	})

	.catch(function (error){
		console.error(error.stack);
		res.redirect('/error');
	})

}

//Update form
exports.edit = function (req,res){
	// var list = new List({id: listId});
	var listId = req.params.listId;
	var itemId = req.params.itemId;
	var item = new Item({
		id: itemId,
		list_id: listId
	});

	item.fetch()
	.then(function (data){
		//render your jade page here
		res.render('items/edit',{
			title: 'Edit Your Item',
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
	var listId = req.params.listId;
	var itemId = req.params.itemId;
	var updates = req.body;

	new Item({id: itemId, list_id: listId})
	.fetch({require: true})
	.then(function (item){
		//item is table name
		item.save(
			{
				'name': req.body.name || item.get('name'), 
				'description': req.body.description || item.get('description')
			}
		)
		console.log('Item updating')
		res.redirect('/lists/'+listId);
	})
	.catch(function (error){
		console.error(error.stack);
		res.redirect('/error');
	})

}

//Destroy
exports.destroy = function (req,res){
	var listId = req.params.listId;
	var itemId = req.params.itemId;
	var updates = req.body;

	new Item({id: itemId, list_id: listId})
	.fetch({require: true})
	.then(function (item){
		//list is table name
		item.destroy()
		console.log('Destroy list')
		res.redirect('/lists'+listId)
	})
	.catch(function (error){
		console.error(error.stack);
		res.redirect('/error');
	})

}
