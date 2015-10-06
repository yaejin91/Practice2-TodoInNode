var path = require('path'),
    bodyParser = require('body-parser');

//models
var	Item = require('../../app/models/item');

//collections
var Items = require('../../app/collections/items');

//List the items
exports.index = function (req,res){
	var items = Items;
	items.fetch()
	.then(function (data){
		console.log(data.toJSON())
		res.render('index',{
			title: 'Items',
			data: data.toJSON()
		})
	})
	.catch(function (error){
		console.error(error.stack);
		req.flash('errors', {'msg': error.message});
		res.redirect('/');
	});
};

//Show
exports.show = function (req, res) {
	var itemId = req.params.id;
	var item = new Item({id: itemId});

	item.fetch()
	.then(function (data){
		console.log(data.toJSON())
		res.render('items/show',{
			title: 'Your Items',
			data: data.toJSON()
		})
	})
	.catch(function (error){
		console.error(error.stack);
		req.flash('errors', {'msg': error.message});
		res.redirect('/');
	});
};

//Create
exports.create = function(req, res){
	
}
