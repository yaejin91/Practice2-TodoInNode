var path = require('path'),
    bodyParser = require('body-parser');

//models
var List = require('../models/list');
	
//collections
var Lists = require('../collections/lists');

//List the lists
exports.index = function (req,res){
	var lists = Lists;
	lists.fetch()
	.then(function (data){
		console.log(data.toJSON())
		res.render('index',{
			title: 'Lists of Things To Do',
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
	var listId = req.params.id;
	var list = new List({id: listId});

	list.fetch()
	.then(function (data){
		console.log(data.toJSON())
		res.render('lists/show',{
			title: 'Your Lists',
			data: data.toJSON()
		})
	})
	.catch(function (error){
		console.error(error.stack);
		req.flash('errors', {'msg': error.message});
		res.redirect('/');
	});
};

// //Create
// app.post('/lists/create', function (req,res) {
// 	var lists = new Lists();
// 	lists.save(function (error){
// 		if(error) throw error;

// 		console.log('List created!');
// 	})
// })

// //Update
// app.put('/lists/edit', function (req,res) {

// })

// //Destroy
// app.del('/lists/delete', function (req,res) {

// })

// app.listen(3000);
// console.log('Listening to port 3000');

